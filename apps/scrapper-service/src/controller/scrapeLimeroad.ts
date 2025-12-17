import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
import path from "path";

//  import deepScroll functionality
import deepAutoScroll from "../lib/Deepscroll";
import SafeWriteJSON from "../lib/SafeWriteJSON";
import FilterUniqueElements from "../lib/FilteringUniqueElements";
import killLimeRoadPopup from "../lib/AutoKillPopups";

const CACHE_PATH = path.join(
  process.cwd(),
  "apps/scrapper-service/tmp_cache/limeroad_raw.json"
);

export async function getCategories(page: any) {
  console.log("Navigating to Limeroad categories...");

  await page.goto("https://www.limeroad.com/categories", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  await page.waitForSelector(".menucf", { timeout: 45000 });

  await page.evaluateOnNewDocument(killLimeRoadPopup);
  await deepAutoScroll(page);

  const data = await page.evaluate(() => {
    const results: {
      index: number;
      category: string;
      href: string;
      subCategories: {
        subCategory: string;
        href: string;
      }[];
    }[] = [];

    const boxes = document.querySelectorAll(".menucf .menuBox");

    boxes.forEach((box, index) => {
      // Category anchor
      const catA = box.querySelector("a");
      if (!catA) return;

      const category = (catA.textContent || "").trim();
      const href = (catA as HTMLAnchorElement).href;

      // Sub categories
      const subCategories: { subCategory: string; href: string }[] = [];

      const subLinks = box.querySelectorAll(".menuBox a:not(:first-child)");

      subLinks.forEach((subA) => {
        const subCategory = (subA.textContent || "").trim();
        const subHref = (subA as HTMLAnchorElement).href;

        if (subCategory && subHref) {
          subCategories.push({ subCategory, href: subHref });
        }
      });

      results.push({
        index,
        category,
        href,
        subCategories,
      });
    });

    return results;
  });

  const cleanData = FilterUniqueElements(data);
  
  await SafeWriteJSON(
    "apps/scrapper-service/tmp_cache/limeroad_categories.json",
    cleanData
  );
}

// ✅ Main Scraper Function
export async function scrapeLimeroad(page: any) {
  console.log("🌐 Navigating to Limeroad...");

  // 🕸️ Step 1: Visit Limeroad homepage
  await page.goto("https://www.limeroad.com/", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  console.log("🕵️ Waiting for product elements...");
  await Promise.race([
    page.waitForSelector("div.bs img", { timeout: 45000 }),
    page
      .waitForSelector("#genderSelectPopup", { timeout: 45000 })
      .catch(() => {}),
  ]);

  await page.evaluateOnNewDocument(killLimeRoadPopup);

  console.log("⏳ Scrolling deeply to load all content...");
  await deepAutoScroll(page);

  // 🔍 Step 2: Extract all visible product containers
  const data = await page.evaluate(() => {
    const results: {
      index: number;
      hrefs: string[];
      images: string[];
      text: string;
      attributes: Record<string, string>;
    }[] = [];

    const productCards = document.querySelectorAll("div.bs");

    productCards.forEach((item, index) => {
      const divAttrs: Record<string, string> = {};
      for (const attr of item.attributes) {
        divAttrs[attr.name] = attr.value;
      }

      const hrefs = Array.from(item.querySelectorAll("a"))
        .map((a) => a.href)
        .filter((a) => !!a);

      const bannedURL =
        "https://img4.junaroad.com/user_profile/profile_5c8ea4717083883eb50b9ba4-1694619030.png";

      // Collect all image URLs (with clean filtering)
      const rawImages = Array.from(item.querySelectorAll("img"))
        .map(
          (img) =>
            img.getAttribute("src") ||
            img.getAttribute("data-src") ||
            img.getAttribute("srcset")?.split(" ")[0] ||
            ""
        )
        .filter(
          (src) =>
            src &&
            !src.startsWith("data:image/gif;base64") &&
            !src.includes("placeholder") &&
            src.includes("stories") &&
            src !== bannedURL
        );

      // Remove duplicates + normalize relative URLs
      const images = Array.from(
        new Set(
          rawImages.map((src) => {
            try {
              const url = new URL(src, window.location.origin);
              return url.href;
            } catch {
              return src;
            }
          })
        )
      );

      if (images.length >= 10) {
        return;
      }
      const text = (item.textContent || "").trim();

      // Only push if it actually contains image data
      if (images.length !== 0) {
        results.push({
          index,
          hrefs,
          images,
          text,
          attributes: divAttrs,
        });
      }
    });

    return results;
  });

  const cleanData = FilterUniqueElements(data);

  console.log(`🧾 Scraped ${cleanData.length} product entries from Limeroad.`);

  await SafeWriteJSON(CACHE_PATH, cleanData);
  console.log(`💾 Data cached successfully at: ${CACHE_PATH}`);

  return cleanData;
}

export async function scrapeLimeroadWithSession() {
  return await rotateSession(scrapeLimeroad);
}

export async function scrapeLimeroadCategoriesWithSession() {
  return await rotateSession(getCategories);
}