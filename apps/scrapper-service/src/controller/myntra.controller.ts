import fs from "fs";
import path from "path";

import { scrapperDb } from "../../../../libs/database/src/index";

import SafeWriteJSON from "../lib/SafeWriteJSON";

import { scrapeSingleProduct } from "../utils/myntra/myntra.products.helper";

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
  materialAndCare: string[];

  specification: string[];

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
                    : `https://www.myntra.com${href.startsWith("/") ? "" : "/"}${href}`,
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

// async function extractProductsFromPage(page: any) {
//   return await page.evaluate(() => {
//     const products: any[] = [];

//     document.querySelectorAll(".product-base,.results-base").forEach((card) => {
//       // getting the product_code = id
//       const productCode = card.getAttribute("id") || "";

//       // getting the href
//       const linkEl = card.querySelector("a");
//       // const imgEl = card.querySelector("img");
//       const images = card.querySelector("source")?.getAttribute("srcset");

//       const href = linkEl?.getAttribute("href");
//       if (!href) return;

//       products.push({
//         productCode,
//         href: href.startsWith("http")
//           ? href
//           : `https://www.myntra.com${href.startsWith("/") ? "" : "/"}${href}`,
//         brand: card.querySelector(".product-brand")?.textContent?.trim() || "",
//         title:
//           card.querySelector(".product-product")?.textContent?.trim() || "",
//         rating:
//           card.querySelector(".product-ratingsContainer span")?.textContent ||
//           "",
//         ratingCount:
//           card
//             .querySelector(".product-ratingsCount")
//             ?.textContent?.replace("|", "")
//             ?.trim() || "",
//         size:
//           card
//             .querySelector(".product-sizeInventoryPresent")
//             ?.textContent?.trim() || null,
//         SRP: card.querySelector(".product-discountedPrice")?.textContent || "",
//         MRP: card.querySelector(".product-strike")?.textContent || "",
//         images: images
//           ? images.split(",").map((i) => i.trim().split(" ")[0])
//           : [],
//         productDetails: [],
//         sizeAndFit: [],
//         materialAndCare: [],
//         specification: [],
//         seller: [],
//       });
//     });

//     return products || [];
//   });
// }

// export async function scrapeSingleProduct(
//   page: any,
//   category: any,
//   rootKey: string,
//   groupKey: string,
//   categoryKey: any,
//   // progressBar: any,
// ) {
//   try {

//     const dbGroup = await scrapperDb.myntraGroupCategory.findFirst({
//       where: { slug: groupKey },
//     });

//     if (!dbGroup) return;

//     const dbCategory = await scrapperDb.myntraCategory.findUnique({
//       where: {
//         slug_groupCategoryId: {
//           slug: categoryKey,
//           groupCategoryId: dbGroup.id,
//         },
//       },
//     });

//     if (!dbCategory) return;

//     const categoryId = dbCategory.id;

//     if (!page || typeof page.goto !== "function") {
//       console.error("❌ Invalid page object");
//       return;
//     }

//     // ✅ FIXED loading strategy
//     await page.goto(category.href, {
//       waitUntil: "domcontentloaded",
//       timeout: 60000,
//     });

//     await page.waitForSelector(".product-base, .results-base", {
//       timeout: 30000,
//     });

//     const totalPages = await getTotalPages(page);

//     let currentPage = 1;
//     let totalCollected = 0;
//     const seen = new Set<string>();

//     while (currentPage <= totalPages) {
//       await deepAutoScroll(page);
//       await new Promise((res) => setTimeout(res, 1500));

//       const products = await extractProductsFromPage(page);

//       const newProducts = products.filter(
//         (p: any) => p.productCode && !seen.has(p.productCode),
//       );

//       newProducts.forEach((p: any) => seen.add(p.productCode));
//       totalCollected += newProducts.length;

//       await Promise.all(
//         newProducts.map((product: any) =>
//           limit(async () => {
//             const newPage = await page.browser().newPage();

//             try {
//               const details = await retry(() =>
//                 scrapeProductByHref(newPage, product.href, categoryId),
//               );

//               if (!details) return;

//               await saveProductsToDB(
//                 [{ ...product, ...details, categoryId }],
//                 categoryId,
//                 scrapperDb,
//               );
//             } catch (err: any) {
//               console.error("❌ Product failed:", product.href);
//               console.error("🔥 Error:", err?.message || err);

//               // optional: log stack for deep debugging
//               if (err?.stack) {
//                 console.error("📛 Stack:", err.stack);
//               }
//             } finally {
//               await newPage.close();
//             }
//           }),
//         ),
//       );

//       if (currentPage >= totalPages) break;

//       const moved = await goToNextPage(page);
//       if (!moved) break;

//       currentPage++;

//       await page.waitForSelector(".product-base, .results-base");
//     }

//   } catch (err: any) {
//     console.error(
//       `❌ Failed: ${rootKey} → ${groupKey} → ${category.title} - ${err} `,
//     );
//   }
// }

export async function scrapeProducts(pages: any[]) {
  const filePath = path.join(
    process.cwd(),
    "apps/scrapper-service",
    "tmp_cache",
    "myntra",
    "categories.json",
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const categories = JSON.parse(raw);

  if(!categories){
    console.error("File Not Found!")
    return
  }

  let pageIndex = 0;

  for (const rootKey of Object.keys(categories)) {
    const rootGroups = categories[rootKey];

    for (const groupKey of Object.keys(rootGroups)) {
      const group = rootGroups[groupKey];

      for (const categoryKey of Object.keys(group.categories)) {
        const category = group.categories[categoryKey];
        if (!category) continue;

        // ✅ Get DB category
        const dbGroup = await scrapperDb.myntraGroupCategory.findFirst({
          where: { slug: groupKey },
        });

        if (!dbGroup) continue;

        const dbCategory = await scrapperDb.myntraCategory.findUnique({
          where: {
            slug_groupCategoryId: {
              slug: categoryKey,
              groupCategoryId: dbGroup.id,
            },
          },
        });

        if (!dbCategory) continue;

        // ❗ Not completed → scrape
        const page = pages[pageIndex % pages.length];
        pageIndex++;

        if (!page || !category || !rootKey || !groupKey || !categoryKey) {
          console.error("Required fields missing! - scrapeSingleProduct");
          return;
        } else {
          await scrapeSingleProduct(
            page,
            category,
            rootKey,
            groupKey,
            categoryKey,
            scrapperDb,
          );
        }
      }
    }
  }
}
