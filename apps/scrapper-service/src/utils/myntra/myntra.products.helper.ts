import pLimit from "p-limit";
import deepAutoScroll from "../../lib/Deepscroll";
import { getTotalPages, retry, scrapeProductByHref } from "./myntra.helper";
import { saveProductsToDB } from "./myntra.dataInjection";

const limit = pLimit(6);

async function safeGoto(page: any, url: string) {
  await retry(async () => {
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 90000,
    });
  }, 3);

  // extra delay (VERY IMPORTANT for Myntra)
  await page.waitForTimeout(3000);

  // block detection
  const blocked = await page.evaluate(() =>
    document.body.innerText.includes("Access Denied")
  );

  if (blocked) {
    throw new Error("Blocked by Myntra");
  }
}


export async function scrapeSingleProduct(
  scrapperDb: any,
  page: any,
  category: any,
  rootKey: string,
  groupKey: string,
  categoryKey: any
) {
  try {
    // ================= DB =================
    const dbGroup = await scrapperDb.myntraGroupCategory.findFirst({
      where: { slug: groupKey },
    });
    if (!dbGroup) return;

    const dbCategory = await scrapperDb.myntraCategory.findUnique({
      where: {
        slug_groupCategoryId: {
          slug: categoryKey,
          groupCategoryId: dbGroup.id,
        },
      },
    });
    if (!dbCategory) return;

    const categoryId = dbCategory.id;

    // ================= PAGE SETUP =================
    if (!page || typeof page.goto !== "function") {
      console.error("❌ Invalid page object");
      return;
    }

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
    );

    await page.setExtraHTTPHeaders({
      "accept-language": "en-US,en;q=0.9",
    });

    // ================= NAVIGATION =================
    await safeGoto(page, category.href);

    await retry(() =>
      page.waitForSelector(".product-base", { timeout: 45000 })
    );

    const totalPages = await getTotalPages(page);

    let currentPage = 1;
    let totalCollected = 0;
    const seen = new Set<string>();

    // ================= PAGINATION LOOP =================
    while (currentPage <= totalPages) {
      console.log(
        `📄 Page ${currentPage}/${totalPages} → ${category.title}`
      );

      await deepAutoScroll(page);
      await page.waitForTimeout(2000 + Math.random() * 2000);

      const products = await extractProductsFromPage(page);

      const newProducts = products.filter(
        (p: any) => p.productCode && !seen.has(p.productCode)
      );

      newProducts.forEach((p: any) => seen.add(p.productCode));
      totalCollected += newProducts.length;

      console.log(`🛒 Found ${newProducts.length} new products`);

      // ================= PRODUCT SCRAPING =================
      await Promise.all(
        newProducts.map((product: any) =>
          limit(async () => {
            const newPage = await page.browser().newPage();

            try {
              await newPage.setUserAgent(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
              );

              const details = await retry(() =>
                scrapeProductByHref(newPage, product.href, categoryId)
              );

              if (!details) return;

              await saveProductsToDB(
                [{ ...product, ...details, categoryId }],
                categoryId,
                scrapperDb
              );
            } catch (err: any) {
              console.error("❌ Product failed:", product.href);
              console.error("🔥 Error:", err?.message || err);
            } finally {
              await newPage.close();
            }
          })
        )
      );

      // ================= NEXT PAGE =================
      if (currentPage >= totalPages) break;

      currentPage++;

      const nextUrl = `${category.href}?p=${currentPage}`;

      console.log(`➡️ Moving to page ${currentPage}`);

      await safeGoto(page, nextUrl);

      await retry(() =>
        page.waitForSelector(".product-base", { timeout: 45000 })
      );
    }

    console.log(
      `✅ Completed ${category.title} → Total Products: ${totalCollected}`
    );
  } catch (err: any) {
    console.error(
      `❌ Failed: ${rootKey} → ${groupKey} → ${category.title}`
    );
    console.error("🔥 Error:", err?.message || err);
  }
}


async function extractProductsFromPage(page: any) {
  return await page.evaluate(() => {
    const products: any[] = [];

    document.querySelectorAll(".product-base,.results-base").forEach((card) => {
      // getting the product_code = id
      const productCode = card.getAttribute("id") || "";

      // getting the href
      const linkEl = card.querySelector("a");
      // const imgEl = card.querySelector("img");
      const images = card.querySelector("source")?.getAttribute("srcset");

      const href = linkEl?.getAttribute("href");
      if (!href) return;

      products.push({
        productCode,
        href: href.startsWith("http")
          ? href
          : `https://www.myntra.com${href.startsWith("/") ? "" : "/"}${href}`,
        brand: card.querySelector(".product-brand")?.textContent?.trim() || "",
        title:
          card.querySelector(".product-product")?.textContent?.trim() || "",
        rating:
          card.querySelector(".product-ratingsContainer span")?.textContent ||
          "",
        ratingCount:
          card
            .querySelector(".product-ratingsCount")
            ?.textContent?.replace("|", "")
            ?.trim() || "",
        size:
          card
            .querySelector(".product-sizeInventoryPresent")
            ?.textContent?.trim() || null,
        SRP: card.querySelector(".product-discountedPrice")?.textContent || "",
        MRP: card.querySelector(".product-strike")?.textContent || "",
        images: images
          ? images.split(",").map((i) => i.trim().split(" ")[0])
          : [],
        productDetails: [],
        sizeAndFit: [],
        materialAndCare: [],
        specification: [],
        seller: [],
      });
    });

    return products || [];
  });
}
