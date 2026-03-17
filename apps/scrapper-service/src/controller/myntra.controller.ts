import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
import fs from "fs";
import path from "path";

//  importing prisma.client from scrapper db
import { scrapperDb } from "../../../../libs/database/src/index";

//  import deepScroll functionality
import deepAutoScroll from "../lib/Deepscroll";
import SafeWriteJSON from "../lib/SafeWriteJSON";

import {
  extractAllProductCodes,
  filterRemainingProducts,
  getExistingProductCodes,
} from "../utils/myntra/myntra.helper";

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

  specification: Array<String>;

  seller: Array<string>;
};

type Category = {
  title: string;
  href: string;
  products: Record<string, Product>;
};

type CategoryGroup = {
  href: string;
  categories: Record<string, Category>;
};

type RootCategories = Record<
  "women" | "men" | "kids" | "home" | "beauty" | "genz",
  Record<string, CategoryGroup>
>;

// categories
export async function scrapeCategories(page: any) {
  console.log("🧭 Navigating to Myntra...");

  await page.goto("https://www.myntra.com", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  const data: RootCategories = await page.evaluate(() => {
    const allowedRoots = ["men", "women", "kids", "home", "beauty", "genz"];

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
                const href = el.getAttribute("href");
                if (!groupTitle) return;

                currentGroupKey = groupTitle;

                groups[currentGroupKey] = {
                  href: href?.startsWith("http")
                    ? href
                    : `https://www.myntra.com${href}`,
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

                groups[currentGroupKey].categories[title] = {
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

export async function saveCategoriesToDB(data: any) {
  for (const rootName of Object.keys(data)) {
    const root = await scrapperDb.myntraRootCategory.upsert({
      where: { name: rootName },
      update: {},
      create: {
        name: rootName,
      },
    });

    const groups = data[rootName];

    for (const groupSlug of Object.keys(groups)) {
      const groupData = groups[groupSlug];

      const group = await scrapperDb.myntraGroupCategory.upsert({
        where: {
          slug_rootCategoryId: {
            slug: groupSlug,
            rootCategoryId: root.id,
          },
        },
        update: {
          title: groupSlug,
        },
        create: {
          slug: groupSlug,
          title: groupSlug,
          rootCategoryId: root.id,
        },
      });

      const categories = groupData.categories;

      for (const categorySlug of Object.keys(categories)) {
        const categoryData = categories[categorySlug];

        await scrapperDb.myntraCategory.upsert({
          where: {
            slug_groupCategoryId: {
              slug: categorySlug,
              groupCategoryId: group.id,
            },
          },
          update: {
            title: categoryData.title,
            href: categoryData.href,
          },
          create: {
            slug: categorySlug,
            title: categoryData.title,
            href: categoryData.href,
            groupCategoryId: group.id,
          },
        });
      }
    }
  }
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
        href: href.startsWith("http") ? href : `https://www.myntra.com/${href}`,
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
        specification: {},
        seller: [],
      });
    });

    return products || [];
  });
}
async function getTotalPages(page: any) {
  try {
    const text = await page.$eval(
      ".pagination-paginationMeta",
      (el: any) => el.textContent,
    );

    const match = text.match(/Page\s+\d+\s+of\s+(\d+)/i);

    return match ? parseInt(match[1]) : 1;
  } catch {
    return 1;
  }
}

async function goToNextPage(page: any) {
  const nextBtn = await page.$(".pagination-next");

  if (!nextBtn) return false;

  const disabled = await page.evaluate(
    (btn: any) => btn.classList.contains("disabled"),
    nextBtn,
  );

  if (disabled) return false;

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    nextBtn.click(),
  ]);

  return true;
}

export async function saveProductsToDB(
  products: any[],
  categoryId: string
) {
  if (!products.length) return;

  try {
    const formattedProducts = products.map((p) => ({
      productCode: p.productCode,
      href: p.href,

      brand: p.brand ?? "",
      title: p.title ?? "",

      rating: p.rating || null,
      ratingCount: p.ratingCount || null,

      size: p.size || null,
      SRP: p.SRP || null,
      MRP: p.MRP || null,

      images: Array.isArray(p.images) ? p.images : [],

      productDetails: Array.isArray(p.productDetails)
        ? p.productDetails
        : [],

      sizeAndFit: Array.isArray(p.sizeAndFit)
        ? p.sizeAndFit
        : [],

      materialAndCare: Array.isArray(p.materialAndCare)
        ? p.materialAndCare
        : [],

      specification: Array.isArray(p.specification)
        ? p.specification
        : [],

      seller: Array.isArray(p.seller) ? p.seller : [],

      categoryId: categoryId,
    }));

    await scrapperDb.myntraProduct.createMany({
      data: formattedProducts,
      // skipDuplicates: true,
    });

    console.log(`💾 Saved ${formattedProducts.length} products`);
  } catch (error) {
    console.error("❌ DB Save Error:", error);
  }
}

export async function scrapeProducts(page: any) {
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
          // 🔥 get categoryId from DB
          const dbCategory = await scrapperDb.myntraCategory.findFirst({
            where: {
              title: category.title,
            },
          });

          if (!dbCategory) {
            console.log(`⚠️ Category not found in DB: ${category.title}`);
            continue;
          }

          const categoryId = dbCategory.id;

          const seen = new Set<string>();

          console.log(`➡️ Loading: ${category.href}`);

          await page.goto(category.href, {
            waitUntil: "networkidle2",
            timeout: 60000,
          });

          await page.waitForSelector(".product-base", {
            timeout: 30000,
          });

          const totalPages = await getTotalPages(page);

          console.log(`📄 Total pages: ${totalPages}`);

          let currentPage = 1;

          while (true) {
            console.log(`📄 Scraping page ${currentPage}`);

            await deepAutoScroll(page);

            await new Promise((r) => setTimeout(r, 2000));

            const products = await extractProductsFromPage(page);

            const newProducts: any[] = [];

            for (const product of products) {
              if (!product.productCode) continue;

              if (!seen.has(product.productCode)) {
                seen.add(product.productCode);

                category.products[product.productCode] = product;

                newProducts.push(product);
              }
            }

            // 🔥 save products to DB
            await saveProductsToDB(newProducts, categoryId);

            console.log(
              `📦 Collected: ${Object.keys(category.products).length}`,
            );

            if (currentPage >= totalPages) break;

            const moved = await goToNextPage(page);

            if (!moved) break;

            currentPage++;

            await page.waitForSelector(".product-base");
          }

          console.log(
            `✅ ${category.title}: ${Object.keys(category.products).length} products`,
          );
        } catch (err: any) {
          console.error(
            `❌ Failed: ${rootKey} → ${groupKey} → ${category.title}`,
          );

          console.error(err?.message || err);

          try {
            await page.screenshot({
              path: `error-${categoryKey}.png`,
              fullPage: true,
            });
          } catch {}

          continue;
        }
      }
    }
  }
}

// export async function getProductsDetails(page: any) {
//   const filePath = path.join(
//     process.cwd(),
//     "apps/scrapper-service",
//     "tmp_cache",
//     "myntra",
//     "products.json",
//   );

//   const raw = fs.readFileSync(filePath, "utf-8");
//   const categories = JSON.parse(raw);

//   const allProducts = extractAllProductCodes(categories);
//   const existingCodes = await getExistingProductCodes(scrapperDb);
//   const remaining = filterRemainingProducts(allProducts, existingCodes);

//   console.log(`📦 Total products in JSON: ${allProducts.length}`);
//   console.log(`✅ Already scraped: ${existingCodes.size}`);
//   console.log(`⏳ Remaining to scrape: ${remaining.length}`);

//   const startTime = Date.now();

//   for (let i = 0; i < remaining.length; i++) {
//     const product = remaining[i];

//     console.log(
//       `🔍 [${i + 1}/${remaining.length}] Scraping ${product.productCode}`,
//     );

//     try {
//       await page.goto(product.href, {
//         waitUntil: "networkidle2",
//         timeout: 60000,
//       });

//       await page.waitForSelector(".pdp-title", { timeout: 20000 });

//       const details = await page.evaluate(() => {
//         const textArr = (sel: string) =>
//           Array.from(document.querySelectorAll(sel))
//             .map((e) => e.textContent?.trim())
//             .filter(Boolean);

//         const images = Array.from(
//           document.querySelectorAll(".image-grid-image"),
//         )
//           .map((el) => {
//             const bg = window.getComputedStyle(el).backgroundImage;
//             const match = bg?.match(/url\(["']?(.*?)["']?\)/);
//             return match?.[1];
//           })
//           .filter(Boolean);

//         const specification: string[] = [];

//         document
//           .querySelectorAll(".index-tableContainer")
//           .forEach((container) => {
//             const keys = container.querySelectorAll(".index-rowKey");
//             const values = container.querySelectorAll(".index-rowValue");

//             keys.forEach((keyEl, idx) => {
//               const key = keyEl.textContent?.trim();
//               const val = values[idx]?.textContent?.trim();
//               if (key && val) specification.push(`${key}: ${val}`);
//             });
//           });

//         return {
//           brand: document.querySelector(".pdp-title")?.textContent || "",
//           title: document.querySelector(".pdp-name")?.textContent || "",
//           rating:
//             document.querySelector(".index-overallRating")?.textContent || "",
//           ratingCount:
//             document.querySelector(".index-ratingsCount")?.textContent || "",
//           SRP: document.querySelector(".pdp-price strong")?.textContent || "",
//           MRP: document.querySelector(".pdp-mrp s")?.textContent || "",
//           images,
//           productDetails: textArr(".pdp-productDescriptorsContainer"),
//           sizeAndFit: textArr(".pdp-sizeFitDesc"),
//           materialAndCare: textArr(".pdp-sizeFitDesc"),
//           specification,
//           seller: textArr(".supplier-productSellerName"),
//         };
//       });

//       await scrapperDb.myntraProduct.create({
//         data: {
//           productCode: product.productCode,
//           href: product.href,
//           ...details,
//           rootCategory: product.rootCategory,
//           groupCategory: product.groupCategory,
//           categorySlug: product.categorySlug,
//         },
//       });

//       console.log(`✅ Saved ${product.productCode}`);

//       await new Promise((r) => setTimeout(r, 1200));
//     } catch (err: any) {
//       console.error(`❌ Failed ${product.productCode}`, err?.message || err);
//     }
//   }

//   const totalTime = (Date.now() - startTime) / 1000;
//   console.log(`🎉 Scraping done in ${Math.round(totalTime / 60)} minutes`);
// }

// // rotating session for normal scrapper

// export async function scrapeMyntraCategories() {
//   return await rotateSession(scrapeCategories);
// }

// export async function scrapeMyntraProducts() {
//   return await rotateSession(getProducts);
// }

// export async function scrapeMyntraProductdetails() {
//   return rotateSession(getProductsDetails);
// }
