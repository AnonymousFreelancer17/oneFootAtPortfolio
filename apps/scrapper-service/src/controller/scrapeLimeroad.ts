import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
// import path from "path";

//  import deepScroll functionality
import deepAutoScroll from "../lib/Deepscroll";
import SafeWriteJSON from "../lib/SafeWriteJSON";
import killLimeRoadPopup from "../lib/AutoKillPopups";
// import { cacheExists } from "../utils/cache.utils";

type CategoryItem = {
  href: string;
};

type CategoryGroup = {
  href: string;
  categories: Record<string, CategoryItem>;
};

type FinalCategories = Record<
  "women" | "men" | "kids" | "home",
  Record<string, CategoryGroup>
>;

// categories
export async function getCategories(page: any) {
  console.log("🧭 Navigating to LimeRoad...");

  await page.goto("https://www.limeroad.com", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.evaluateOnNewDocument(killLimeRoadPopup);

  await deepAutoScroll(page);

  const data: FinalCategories = await page.evaluate(() => {
    const parseSection = (root: Element | null) => {
      if (!root) return {};

      const result: Record<string, CategoryGroup> = {};
      let currentGroup: string | null = null;

      root
        .querySelectorAll(
          ".dTc.p08.taL.ttC.vT.pb38.wp20.bgF , .dTc.p08.taL.ttC.vT.pb38.wp20.bgFC , .dTc.p08.taL.ttC.vT.pb38.wp25.bgF , .dTc.p08.taL.ttC.vT.pb38.wp25.bgFC , .dTc.p08.taL.ttC.vT.pb38.wp50.bgF , .dTc.p08.taL.ttC.vT.pb38.wp50.bgFC"
        )
        .forEach((el) => {
          const divs = Array.from(el.querySelectorAll(":scope > div"));

          divs.forEach((div) => {
            /* -----------------------------
           🟫 GROUP HEADER
        ------------------------------ */
            if (
              div.classList.contains("mb5") &&
              div.classList.contains("pR") &&
              ["mt10", "mt16"].some((cls) => div.classList.contains(cls))
            ) {
              currentGroup =
                div.querySelector("a")?.textContent?.trim() || null;

              const raw = div.querySelector("a")?.getAttribute("data-obj");
              if (!raw) return;

              const parsed = JSON.parse(raw.replace(/&quot;/g, '"'));
              if (!parsed.href) return;

              if (!currentGroup) return;

              result[currentGroup] = {
                href: `https://www.limeroad.com${parsed.href}`,
                categories: {},
              };

              return;
            }

            /* -----------------------------
           🔗 SUB CATEGORY
        ------------------------------ */
            if (
              div.classList.contains("fs14") &&
              div.classList.contains("p48") &&
              div.classList.contains("pR") &&
              currentGroup
            ) {
              const anchor = div.querySelector("a[data-obj]");
              if (!anchor) return;

              const label = anchor.textContent?.trim();
              const raw = anchor.getAttribute("data-obj");
              if (!label || !raw) return;

              try {
                const parsed = JSON.parse(raw.replace(/&quot;/g, '"'));
                if (!parsed.href) return;

                result[currentGroup].categories[label] = {
                  href: `https://www.limeroad.com${parsed.href}`,
                };
              } catch {}
            }
          });
        });

      return result;
    };

    const root = document.querySelector("#newCategories");

    return {
      women: parseSection(
        root?.querySelector("#women_category_expand") || null
      ),
      men: parseSection(root?.querySelector("#men_category_expand") || null),
      kids: parseSection(root?.querySelector("#kids_category_expand") || null),
      home: parseSection(root?.querySelector("#home_category_expand") || null),
    };
  });

  await SafeWriteJSON(
    "apps/scrapper-service/tmp_cache/limeroad_categories.json",
    data
  );

  console.log("✅ Complete mega-menu scraped successfully");

  return data;
}

export async function scrapeLimeroadCategoriesWithSession() {
  return await rotateSession(getCategories);
}

// products

type Product = {
  title: string;
  price: string;
  href: string;
  image?: string;
};

export async function scrapeProductsFromCategory(
  page: any,
  categoryUrl: string
): Promise<Product[]> {
  console.log(`🛒 Scraping products from ${categoryUrl}`);

  try {
    await page.goto(categoryUrl, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    // 🔄 Scroll to load products
    await deepAutoScroll(page);

    const products: Product[] = await page.evaluate(() => {
      const items: Product[] = [];

      // 🔑 LimeRoad product card selector
      document.querySelectorAll(".vip-pro").forEach((div) => {
        // <a data-prod-id="21934899" data-pgn="Prod VIP" onclick="window.alakhNiranjan &amp;&amp; $.click(this,event)" data-obj="{&quot;sp&quot;:&quot;false&quot;,&quot;imp&quot;:1,&quot;vi&quot;:1,&quot;click&quot;:&quot;ajax&quot;,&quot;spdata&quot;:&quot;menu&quot;,&quot;trns&quot;:&quot;trnsL&quot;,&quot;log&quot;:1,&quot;rplc&quot;:1,&quot;ldrt&quot;:&quot;vipNew&quot;}" href="/pink-crimsoune-club-p21934899?imgIdx=0&amp;src_id=navdeskTrousers__105" class="dB pR taC ldr gtm-p h412 bs oH phref" data-tr="{&quot;name&quot;:&quot;view&quot;,&quot;dest&quot;: &quot;dwandfeed&quot;,&quot;dotype&quot;:&quot;product&quot;,&quot;doid&quot;:&quot;21934899&quot;,&quot;doextra&quot;:&quot;&quot;,&quot;dftype&quot;:&quot;&quot;,&quot;dfid&quot;:&quot;&quot;,&quot;dfextra&quot;:&quot;&quot;}">

        //     <img id="21934899" src="//img0.junaroad.com/uiproducts/21934899/zoom_0-1747334167.jpg" data-src="//img0.junaroad.com/uiproducts/21934899/zoom_0-1747334167.jpg" class="dB h412 w310 mA pR prdI gtm-p an-ll" alt="women solid mid rise straight fit trouser" data-df="" data-count="" data-ast="product" data-impression="{&quot;attr&quot;:{&quot;name&quot;:&quot;impression&quot;,&quot;dest&quot;:&quot;dw&quot;},&quot;do&quot;:{&quot;id&quot;:&quot;21934899&quot;,&quot;type&quot;:&quot;desktop&quot;}}" onerror="this.src=this.getAttribute('data-src'); this.onerror='';" loading="eager" fetchpriority="high" data-loaded="true" data-logged="true">

        // </a>

        div.querySelectorAll(":scope > div").forEach((card: any) => {
          const id = card.querySelector("a")?.getAttribute("data-prod-id");
          const title = card.querySelector(".fwB").textContent.trim() || null;
          const image = `https: + ${card
            .querySelector("img")
            .getAttribute("src")}`;
          const href = `https://limeroad.com + ${card
            .querySelector("a")
            .getAttribute("href")}`;

          if (!id || !title || !image || !href) {
            return;
          }

          const price = ""

          items.push({ image, title, href, price });
        });
      });

      return items;
    });

    // 🧹 Deduplicate by href
    const unique = Array.from(
      new Map(products.map((p) => [p.href, p])).values()
    );

    console.log(`✅ Found ${unique.length} products`);

    return unique;
  } catch (error) {
    console.error("❌ Product scrape failed", error);
    return [];
  }
}

export async function getProducts(page: any) {
  // const cached = await cacheExists("/limeroad/categories");

  // if (cached) {
  //   console.log("Serving the limeroad categories");
  // }

  // for (const [sectionName, section] of Object.entries(cached)) {
  //   for (const [groupName, group] of Object.entries(section as any)) {
  //     const categories = (group as any).categories;
  //     if (!categories) continue;

  //     console.log(`🗂 ${sectionName} → ${groupName}`);

  //     for (const [categoryName, category] of Object.entries(categories)) {
  //       const categoryObj = category as any;

  //       // ✅ Skip if already scraped
  //       if (Array.isArray(categoryObj.products)) {
  //         console.log(`⏩ Cached: ${categoryName}`);
  //         continue;
  //       }

  //       if (!categoryObj.href) continue;

  //       console.log(`🔗 Scraping: ${categoryName}`);

  //       try {
  //         const products = await scrapeProductsFromCategory(
  //           page,
  //           categoryObj.href
  //         );

  //         // 🔥 THIS IS THE ONLY MUTATION
  //         categoryObj.products = products;

  //         // 🔐 Persist immediately
  //         await SafeWriteJSON(
  //           "apps/scrapper-service/tmp_cache/products.json",
  //           cached
  //         );
  //       } catch (err) {
  //         console.error(`❌ Failed: ${categoryName}`, err);
  //       }
  //     }
  //   }
  // }

  return [];
}

export async function scrapeLimeroadProducts() {
  return await rotateSession(getProducts);
}

 