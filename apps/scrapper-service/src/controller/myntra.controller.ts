import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
import fs from "fs";
import path from "path";

//  importing prisma.client from scrapper db
import { scrapperDb } from "../../../../libs/database/src/index";

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

  specification: Array<String>;

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

//   for (const rootKey of Object.keys(categories)) {
//     const rootGroups = categories[rootKey];

//     for (const groupKey of Object.keys(rootGroups)) {
//       const group = rootGroups[groupKey];

//       for (const categoryKey of Object.keys(group.categories)) {
//         const category = group.categories[categoryKey];

//         console.log(`🔍 Details: ${rootKey} → ${groupKey} → ${category.title}`);

//         for (const productCode of Object.keys(category.products)) {
//           const product = category.products[productCode];

//           // ✅ Skip already enriched products
//           if (
//             product.productDetails?.length ||
//             product.materialAndCare?.length
//           ) {
//             continue;
//           }

//           console.log(`➡️ Product: ${productCode}`);

//           try {
//             await page.goto(product.href, {
//               waitUntil: "networkidle2",
//               timeout: 60000,
//             });

//             await page.waitForSelector(".pdp-title", { timeout: 20000 });

//             const details = await page.evaluate(() => {
//               const textArr = (sel: string) =>
//                 Array.from(document.querySelectorAll(sel))
//                   .map((e) => e.textContent?.trim())
//                   .filter(Boolean);

//               const images = Array.from(
//                 document.querySelectorAll(".image-grid-image"),
//               )
//                 .map((img: any) => img.src)
//                 .filter(Boolean);

//               const specification: Record<string, string> = {};
//               document.querySelectorAll(".index-tableRow").forEach((row) => {
//                 const key = row
//                   .querySelector(".index-rowKey")
//                   ?.textContent?.trim();
//                 const val = row
//                   .querySelector(".index-rowValue")
//                   ?.textContent?.trim();
//                 if (key && val) specification[key] = val;
//               });

//               return {
//                 brand:
//                   document.querySelector(".pdp-title")?.textContent?.trim() ||
//                   "",
//                 title:
//                   document.querySelector(".pdp-name")?.textContent?.trim() ||
//                   "",
//                 rating:
//                   document.querySelector(".index-overallRating")?.textContent ||
//                   "",
//                 ratingCount:
//                   document.querySelector(".index-ratingsCount")?.textContent ||
//                   "",
//                 SRP:
//                   document.querySelector(".pdp-price strong")?.textContent ||
//                   "",
//                 MRP: document.querySelector(".pdp-mrp s")?.textContent || "",
//                 images,
//                 productDetails: textArr(".index-descriptionText"),
//                 sizeAndFit: textArr(".index-sizeFitDesc"),
//                 materialAndCare: textArr(".index-materialCareDesc"),
//                 specification,
//                 seller: textArr(".supplier-productSellerName"),
//               };
//             });

//             // ✅ Merge back safely
//             Object.assign(product, details);

//             // ⏳ Politeness delay (important for Myntra)
//             await new Promise((r) => setTimeout(r, 1200));
//           } catch (err: any) {
//             console.error(
//               `❌ Failed product ${productCode}`,
//               err?.message || err,
//             );

//             // Optional screenshot
//             try {
//               await page.screenshot({
//                 path: `error-product-${productCode}.png`,
//                 fullPage: true,
//               });
//             } catch {}

//             continue;
//           }
//         }
//       }
//     }
//   }

//   fs.writeFileSync(
//     path.join(
//       process.cwd(),
//       "apps/scrapper-service/tmp_cache/myntra/products-details.json",
//     ),
//     JSON.stringify(categories, null, 2),
//   );
//   console.log("🎉 Product details scraping completed");
// }

// functions with session rotation to expect and react to failures and being reactuve about it!

export async function getProductsDetails(page: any) {
  const filePath = path.join(
    process.cwd(),
    "apps/scrapper-service",
    "tmp_cache",
    "myntra",
    "products.json",
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const categories = JSON.parse(raw);

  for (const rootKey of Object.keys(categories)) {
    const rootGroups = categories[rootKey];

    for (const groupKey of Object.keys(rootGroups)) {
      const group = rootGroups[groupKey];

      for (const categoryKey of Object.keys(group.categories)) {
        const category = group.categories[categoryKey];

        console.log(`🔍 ${rootKey} → ${groupKey} → ${category.title}`);

        for (const productCode of Object.keys(category.products)) {
          const product = category.products[productCode];

          console.log(`➡️ Scraping product: ${productCode}`);

          try {
            await page.goto(product.href, {
              waitUntil: "networkidle2",
              timeout: 60000,
            });

            await page.waitForSelector(".pdp-title", { timeout: 20000 });

            const details = await page.evaluate(() => {
              const textArr = (sel: string) =>
                Array.from(document.querySelectorAll(sel))
                  .map((e) => e.textContent?.trim())
                  .filter(Boolean);

              const images = Array.from(
                document.querySelectorAll(".image-grid-image"),
              )
                .map((el) => {
                  const bg = window.getComputedStyle(el).backgroundImage;
                  const match = bg?.match(/url\(["']?(.*?)["']?\)/);
                  return match?.[1];
                })
                .filter(Boolean);

              const specification: string[] = [];

              document
                .querySelectorAll(".index-tableContainer")
                .forEach((container) => {
                  const keys = Array.from(
                    container.querySelectorAll(".index-rowKey"),
                  );
                  const values = Array.from(
                    container.querySelectorAll(".index-rowValue"),
                  );

                  keys.forEach((keyEl, index) => {
                    const key = keyEl.textContent?.replace(/\s+/g, " ").trim();
                    const val = values[index]?.textContent
                      ?.replace(/\s+/g, " ")
                      .trim();

                    if (key && val) {
                      specification.push(`${key}: ${val}`);
                    }
                  });
                });

              return {
                brand:
                  document.querySelector(".pdp-title")?.textContent?.trim() ||
                  "",
                title:
                  document.querySelector(".pdp-name")?.textContent?.trim() ||
                  "",
                rating:
                  document.querySelector(".index-overallRating")?.textContent ||
                  "",
                ratingCount:
                  document.querySelector(".index-ratingsCount")?.textContent ||
                  "",
                SRP:
                  document.querySelector(".pdp-price strong")?.textContent ||
                  "",
                MRP: document.querySelector(".pdp-mrp s")?.textContent || "",
                images,
                productDetails: textArr(".pdp-productDescriptorsContainer"),
                sizeAndFit: textArr(".pdp-sizeFitDesc"),
                materialAndCare: textArr(".pdp-sizeFitDesc"),
                specification,
                seller: textArr(".supplier-productSellerName"),
              };
            });

            const existing = await scrapperDb.myntraProduct.findUnique({
              where: { productCode },
            });

            if (existing) {
              await scrapperDb.myntraProduct.update({
                where: { productCode },
                data: {
                  ...details,
                  href: product.href,
                  rootCategory: rootKey,
                  groupCategory: groupKey,
                  categorySlug: categoryKey,
                },
              });
            } else {
              await scrapperDb.myntraProduct.create({
                data: {
                  productCode,
                  href: product.href,
                  ...details,
                  rootCategory: rootKey,
                  groupCategory: groupKey,
                  categorySlug: categoryKey,
                },
              });
            }

            console.log(`✅ Saved: ${productCode}`);

            // ⏳ Politeness delay
            await new Promise((r) => setTimeout(r, 1200));
          } catch (err: any) {
            console.error(`❌ Failed ${productCode}`, err?.message || err);
            continue;
          }
        }
      }
    }
  }

  console.log("🎉 Product details scraping completed (DB persisted)");
}

export async function scrapeMyntraCategories() {
  return await rotateSession(getCategories);
}

export async function scrapeMyntraProducts() {
  return await rotateSession(getProducts);
}

export async function scrapeMyntraProductdetails() {
  return rotateSession(getProductsDetails);
}
