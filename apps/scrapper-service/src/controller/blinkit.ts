import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
import path from "path";
import deepAutoScroll from "../lib/Deepscroll";
import SafeWriteJSON from "../lib/SafeWriteJSON";
import fs from "fs";
import pLimit from "p-limit";

const BASE_URL = `https://blinkit.com`;

const CACHE_BLINKIT_CATEGORIES_PATH = path.join(
  process.cwd(),
  "apps/scrapper-service/data/blinkit_categories.json"
);

const CACHE_BLINKIT_PRODUCTS_PATH = path.join(
  process.cwd(),
  "apps/scrapper-service/tmp_cache/blinkit_products.json"
);


type SubCategory = {
  sub_category_name: string;
  href: string;
  products?: {
    name: string;
    weight: string;
    price: string;
    oldPrice: string;
    offer: string
    image: string;
  }[];
};

type Category = {
  index: number;
  category_name: string;
  subCategories: SubCategory[];
};

export async function scrapeCategories(page: any) {
  const URL = BASE_URL + "/categories";

  console.log("🌐 Navigating to Blinkit categories...");
  await page.goto(URL, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  console.log("⏳ Scrolling deeply to load all content...");
  await deepAutoScroll(page);

  await page.waitForSelector(".Category__Container-sc-1k4awti-3.hfVSDl", {
    timeout: 45000,
  });

  const { results } = await page.evaluate(() => {
    const results: {
      index: number;
      category_name: string;
      subCategories: { sub_category_name: string; href: string }[];
    }[] = [];

    const h2 = Array.from(document.querySelectorAll("h2"));
    const div = Array.from(
      document.querySelectorAll('div[class^="Category__Temp-sc-1k4awti-1"]')
    );

    div?.forEach((item, index) => {
      const links = item.querySelectorAll("a");
      const category_name = h2[index]?.textContent.trim() || "";
      const subCategories: { sub_category_name: string; href: string }[] = [];

      links.forEach((aTag) => {
        const href = aTag.getAttribute("href") || "";
        const sub_category_name = aTag.textContent?.trim() || "";

        if (href && sub_category_name && href !== "/s/") {
          subCategories.push({ sub_category_name, href });
        }
      });

      if (category_name && subCategories.length > 0) {
        results.push({
          index,
          category_name,
          subCategories,
        });
      }
    });

    return { results };
  });

  await SafeWriteJSON(CACHE_BLINKIT_CATEGORIES_PATH, results);
  console.log(`💾 Data cached successfully at: ${CACHE_BLINKIT_CATEGORIES_PATH}`);
  console.log(`✅ Extracted ${results.length} categories`);
  return results;
}

export async function scrapeProductsFromSubCategories(
  page: any,
  categories: Category[]
): Promise<Category[]> {
  console.log("🛒 Starting product scraping for all sub-categories...");

  for (const category of categories) {
    console.log(`📦 Category: ${category.category_name}`);

    for (const sub of category.subCategories) {
      const subUrl = BASE_URL + sub.href;
      console.log(
        `➡️ Scraping products from: ${sub.sub_category_name} (${subUrl})`
      );

      try {
        await page.goto(subUrl, { waitUntil: "networkidle2", timeout: 60000 });
        await deepAutoScroll(page);
        await page.waitForSelector(
          '[class^="BffPlpFeedContainer__BlurredContainer-sc-12wcdtn-8"]',
          { timeout: 45000 }
        );

        const products = await page.evaluate(() => {
          const cards = Array.from(
            document.querySelectorAll('div[data-pf="reset"][role="button"][id]')
          );

          return cards
            .map((card) => {
              const getText = (selector: string) =>
                card.querySelector(selector)?.textContent?.trim() || "";

              const image =
                card.querySelector("img")?.getAttribute("src") ||
                card
                  .querySelector('img[data-pf="reset"]')
                  ?.getAttribute("src") ||
                "";

              // Grab all text nodes for dynamic detection
              const textBlocks = Array.from(
                card.querySelectorAll('[data-pf="reset"]')
              )
                .map((el) => el.textContent?.trim())
                .filter(Boolean) as string[];

              // Infer values based on content patterns
              const name =
                textBlocks.find(
                  (t) => t.length > 15 && !t.includes("₹") && !t.includes("%")
                ) || getText(".tw-text-300.tw-font-semibold");

              const weight =
                textBlocks.find((t) =>
                  /[0-9]+(\s)?(g|ml|kg|L|pcs|Pack)/i.test(t)
                ) || getText(".tw-text-200.tw-font-medium");

              const price =
                textBlocks.find((t) => t.includes("₹") && !t.includes("OFF")) ||
                getText(".tw-text-200.tw-font-semibold");

              const oldPrice =
                card
                  .querySelector('div[style*="line-through"] span')
                  ?.textContent?.trim() ||
                textBlocks.find(
                  (t) => t.includes("₹") && textBlocks.indexOf(t) > 0
                );

              const offer =
                textBlocks.find((t) => t.includes("% OFF")) ||
                card.querySelector(".tw-text-050.tw-absolute.tw-z-20.tw-w-5.tw-text-center.tw-font-extrabold.tw-text-white-900")?.textContent?.trim() ||
                "";

              return {
                name: name || "",
                weight: weight || "",
                price: price || "",
                oldPrice: oldPrice || "",
                offer: offer || "",
                image,
              };
            })
            .filter((p) => p.name && p.price);
        });

        sub.products = products;
        console.log(
          `✅ ${products.length} products scraped under "${sub.sub_category_name}"`
        );
      } catch (err: any) {
        if (err?.name === "TimeoutError") {
          console.warn(`❌ Timeout scraping ${sub.sub_category_name}. Skipping...`);
        } else {
          console.warn(`❌ Failed to scrape ${sub.sub_category_name}:`, err?.message);
        }

        // continue gracefully
        sub.products = [];
        continue;
      }
    }
  }

  await SafeWriteJSON(CACHE_BLINKIT_PRODUCTS_PATH, categories);
  console.log(`💾 Product data cached successfully at: ${CACHE_BLINKIT_PRODUCTS_PATH}`);

  return categories;
}

export async function scrapeBlinkitCategoryWithSession() {
  return await rotateSession(scrapeCategories);
}

export async function scrapeBlinkitProductsWithSession() {
  let categories;

  if (fs.existsSync(CACHE_BLINKIT_CATEGORIES_PATH)) {
    console.log("📂 Using cached categories data...");
    categories = JSON.parse(fs.readFileSync(CACHE_BLINKIT_CATEGORIES_PATH, "utf-8"));
  } else {
    console.log("🌐 No cache found. Scraping categories from Blinkit...");
    const categoriesResult = await rotateSession(scrapeCategories);
    categories = categoriesResult?.results || categoriesResult;
  }

  const limit = pLimit(3);
  const allCategoryResults: any[] = [];

  await Promise.all(
    categories.map((category: any) =>
      limit(async () => {
        console.log(`⚙️ Starting scrape for category: ${category.category_name}`);
        try {
          const result = await rotateSession(async (page: any) => {
            return await scrapeProductsFromSubCategories(page, [category]);
          });
          if (Array.isArray(result) && result.length > 0) {
            allCategoryResults.push(result[0]);
            console.log(`✅ Finished category: ${category.category_name}`);
          }
        } catch (err: any) {
          console.error(`❌ Failed category: ${category.category_name}:`, err.message);
        }
      })
    )
  );

  // ✅ Only write ONCE after all categories complete
  await SafeWriteJSON(CACHE_BLINKIT_PRODUCTS_PATH, allCategoryResults);
  console.log(`💾 Final product data cached successfully at: ${CACHE_BLINKIT_PRODUCTS_PATH}`);

  return allCategoryResults;
}
 



