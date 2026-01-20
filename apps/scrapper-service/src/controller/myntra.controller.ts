import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
import fs from "fs";
import path from "path";

//  import deepScroll functionality
import deepAutoScroll from "../lib/Deepscroll";
import SafeWriteJSON from "../lib/SafeWriteJSON";

type Product = {
  productCode: string;

  href: string;

  brand: string;
  title: string;
  rating: string;
  ratingCount: string;
  size: string;
  SRP: string;
  MRP: string;
  images: Array<string>;
  productDetails: Array<string>;
  sizeAndFit: Array<string>;
  materialAndCare: Array<String>;

  specification: Object;

  seller: Array<string>;
};

type CategoryItem = {
  title: string;
  href: string;
  products: Record<string, Product>;
};

type CategoryGroup = {
  href: string;
  categories: Record<string, CategoryItem>;
};

type Categories = Record<
  "women" | "men" | "kids" | "home" | "beauty" | "genz",
  Record<string, CategoryGroup>
>;

// categories
export async function getCategories(page: any) {
  console.log("🧭 Navigating to Myntra...");

  await page.goto("https://www.myntra.com", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  const data: Categories = await page.evaluate(() => {
    const allowedRoots = ["men", "women", "kids", "home", "beauty", "genz"];

    const slugify = (text: string) =>
      text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

    const result: any = {
      men: {},
      women: {},
      kids: {},
      home: {},
      beauty: {},
      genz: {},
    };

    document.querySelectorAll(".desktop-navContent").forEach((nav) => {
      const rootAnchor = nav.querySelector(".desktop-navLink > a");
      if (!rootAnchor) return;

      const rootTitle = rootAnchor.textContent?.trim().toLowerCase();
      const rootHref = rootAnchor.getAttribute("href") || "";

      if (!rootTitle || !allowedRoots.includes(rootTitle)) return;

      const categoryContainer = nav.querySelector(".desktop-categoryContainer");
      if (!categoryContainer) return;

      const groups: Record<string, any> = {};

      categoryContainer
        .querySelectorAll(".desktop-navBlock")
        .forEach((block) => {
          let currentGroupKey: string | null = null;

          block
            .querySelectorAll(".desktop-categoryName, .desktop-categoryLink")
            .forEach((el) => {
              // 🆕 New group encountered
              if (el.classList.contains("desktop-categoryName")) {
                const groupTitle = el.textContent?.trim();
                if (!groupTitle) return;

                currentGroupKey = slugify(groupTitle);

                groups[currentGroupKey] = {
                  href: rootHref,
                  categories: {},
                };
              }

              // ➕ Category under current group
              else if (
                el.classList.contains("desktop-categoryLink") &&
                currentGroupKey
              ) {
                const title = el.textContent?.trim();
                const href = el.getAttribute("href");
                if (!title || !href) return;

                groups[currentGroupKey].categories[slugify(title)] = {
                  title,
                  href: href.startsWith("http")
                    ? href
                    : `https://www.myntra.com${href}`,
                  products: {},
                };
              }
            });
        });

      result[rootTitle] = groups;
    });

    return result;
  });

  await SafeWriteJSON(
    "apps/scrapper-service/tmp_cache/myntra/categories.json",
    data,
  );

  console.log("✅ Complete mega-menu scraped successfully");

  return data;
}

// helper funciton to extract data

async function extractProductsFromPage(page: any) {
  return await page.evaluate(() => {
    const products: any[] = [];

    document.querySelectorAll(".product-base").forEach((card) => {
      // getting the product_code = id
      const productCode = card.getAttribute("id");

      // getting the href
      const linkEl = card.querySelector("a");
      // const imgEl = card.querySelector("img");
      const images = card.querySelector("source")?.getAttribute("srcset");

      const href = linkEl?.getAttribute("href");
      if (!href) return;

      products.push({
        productCode,
        href: href.startsWith("http") ? href : `https://www.myntra.com${href}`,
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
        size: card.querySelector(".product-sizeInventoryPresent")?.textContent?.trim() || null,
        SRP: card.querySelector(".product-discountedPrice")?.textContent || "",
        MRP: card.querySelector(".product-strike")?.textContent || "",
        images: images
          ? images.split(",").map((i) => i.trim().split(" ")[0])
          : [],
        productDetails: [],
        sizeAndFit: [],
        materialAndCare: [],
        specification: {},
        seller: [],
      });
    });

    return products || [];
  });
}

export async function getProducts(page: any) {
  const filePath = path.join(
    process.cwd(),
    "apps/scrapper-service",
    "tmp_cache",
    "myntra",
    "categories.json",
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const categories = JSON.parse(raw);

  for (const rootKey of Object.keys(categories)) {
    const rootGroups = categories[rootKey];

    for (const groupKey of Object.keys(rootGroups)) {
      const group = rootGroups[groupKey];

      for (const categoryKey of Object.keys(group.categories)) {
        const category = group.categories[categoryKey];

        console.log(
          `🔍 Scraping: ${rootKey} → ${groupKey} → ${category.title}`,
        );

        try {
          const seen = new Set<string>();

          console.log(`➡️ Loading: ${category.href}`);

          await page.goto(category.href, {
            waitUntil: "networkidle2",
            timeout: 60000,
          });

          await page.waitForSelector(".product-base", {
            timeout: 30000,
          });

          const initialCount = await page.evaluate(
            () => document.querySelectorAll(".product-base").length,
          );
          console.log("🧪 Initial products:", initialCount);

          // 🔥 Infinite scroll
          await deepAutoScroll(page);

          // React hydration buffer
          await new Promise((r) => setTimeout(r, 2000));

          const finalCount = await page.evaluate(
            () => document.querySelectorAll(".product-base").length,
          );
          console.log("🧪 After scroll products:", finalCount);

          const products = await extractProductsFromPage(page);

          for (const product of products) {
            if (!product.productCode) continue;

            if (!seen.has(product.productCode)) {
              seen.add(product.productCode);
              category.products[product.productCode] = product;
            }
          }

          console.log(
            `✅ ${category.title}: ${Object.keys(category.products).length} products`,
          );
        } catch (err: any) {
          console.error(
            `❌ Failed: ${rootKey} → ${groupKey} → ${category.title}`,
          );
          console.error(err?.message || err);

          // Optional: screenshot for debugging
          try {
            await page.screenshot({
              path: `error-${categoryKey}.png`,
              fullPage: true,
            });
          } catch {}

          // 🔥 Continue with next category
          continue;
        }
      }
    }
  }

  // ✅ Always save whatever was collected
  fs.writeFileSync(
    path.join(
      process.cwd(),
      "apps/scrapper-service/tmp_cache/myntra/products.json",
    ),
    JSON.stringify(categories, null, 2),
  );

  console.log("🎉 Scraping completed (with fault tolerance)");
}



// functions with session rotation to expect and react to failures and being reactuve about it!

export async function scrapeMyntraCategories() {
  return await rotateSession(getCategories);
}

export async function scrapeMyntraProducts() {
  return await rotateSession(getProducts);
}
