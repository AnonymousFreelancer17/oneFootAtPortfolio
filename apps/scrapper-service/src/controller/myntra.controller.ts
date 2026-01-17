import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
// import path from "path";

//  import deepScroll functionality
import deepAutoScroll from "../lib/Deepscroll";
import SafeWriteJSON from "../lib/SafeWriteJSON";
import killLimeRoadPopup from "../lib/AutoKillPopups";
import { cacheExists } from "../utils/cache.utils";

type Product = {
  productCode: string;

  brand: string;
  title: string;
  rating: string;
  ratingCount: string;
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
  console.log("🧭 Navigating to LimeRoad...");

  await page.goto("https://www.myntra.com", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.evaluateOnNewDocument(killLimeRoadPopup);

  await deepAutoScroll(page);

   const data: Categories = await page.evaluate(() => {
    

      const result: Record<string, CategoryGroup> = {};
      let currentGroup: string | null = null;

      root
        .querySelectorAll(
          ".desktop-navContent"
        )
        .forEach((el) => {


        //  selecting the div-group to get the 
          const category= el?.querySelector(".desktop-navLink");

        //    selecting the anchor tag
          const categoryAnchorRaw = category?.querySelector("a");

        //    getting the fields for category
          const categoryTextContent = categoryAnchorRaw?.textContent.trim() || null;
          const categorynchorHref = categoryAnchorRaw?.getAttribute("href") || null
 
          // it returns men | women | kids | home | beauty | genz 
 
          //  getting the li items from the container
          const 

        });

      return result;
    }

  await SafeWriteJSON(
    "apps/scrapper-service/tmp_cache/limeroad_categories.json",
    data
  );

  console.log("✅ Complete mega-menu scraped successfully");

  return data;
}