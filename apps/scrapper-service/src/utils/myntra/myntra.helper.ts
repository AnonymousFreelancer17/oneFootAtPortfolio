export function extractAllProductCodes(categories: any): {
  productCode: string;
  href: string;
  rootCategory: string;
  groupCategory: string;
  categorySlug: string;
}[] {
  const results: any[] = [];

  for (const rootKey of Object.keys(categories)) {
    for (const groupKey of Object.keys(categories[rootKey])) {
      const group = categories[rootKey][groupKey];

      for (const categoryKey of Object.keys(group.categories)) {
        const category = group.categories[categoryKey];

        for (const productCode of Object.keys(category.products)) {
          const product = category.products[productCode];

          results.push({
            productCode,
            href: product.href,
            rootCategory: rootKey,
            groupCategory: groupKey,
            categorySlug: categoryKey,
          });
        }
      }
    }
  }

  return results;
}

export async function getExistingProductCodes(
  scrapperDb: any,
): Promise<Set<string>> {
  const rows = await scrapperDb.myntraProduct.findMany({
    select: { productCode: true },
  });

  return new Set(
    rows
      .map((r: any) => r.productCode)
      .filter((code: any): code is string => typeof code === "string"),
  );
}

export async function checkCategoryCompletion(
  categoryId: string,
  scrapperDb: any,
) {
  const products = await scrapperDb.myntraProducts_v1.findMany({
    where: { categoryId },
    select: { id: true },
  });

  const count = products.length;

  return {
    count,
    isCompleted: count >= 100, // 🔥 your threshold
  };
}

export async function updateProgressFromDB(
  rootKey: string,
  groupKey: string,
  categoryKey: string,
  count: number,
  scrapperDb: any,
  status: "pending" | "running" | "completed",
) {
  await scrapperDb.myntraScrapeProgress.upsert({
    where: {
      rootCategory_groupCategory_categorySlug: {
        rootCategory: rootKey,
        groupCategory: groupKey,
        categorySlug: categoryKey,
      },
    },
    update: {
      totalProducts: count,
      status,
    },
    create: {
      rootCategory: rootKey,
      groupCategory: groupKey,
      categorySlug: categoryKey,
      totalProducts: count,
      status,
    },
  });
}

export function filterRemainingProducts(
  allProducts: any[],
  existingCodes: Set<string>,
) {
  return allProducts.filter((p) => !existingCodes.has(p.productCode));
}

export async function getTotalPages(page: any) {
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

export async function goToNextPage(page: any) {
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

export async function scrapeProductByHref(
  page: any,
  href: string,
  categoryId?: string,
) {
  try {
    if (!href) return null;

    const url = href.startsWith("http")
      ? href
      : `https://www.myntra.com/${href}`;

    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    await page.waitForSelector(".pdp-title", {
      timeout: 20000,
    });

    const details = await page.evaluate(() => {
      const textArr = (sel: string) =>
        Array.from(document.querySelectorAll(sel))
          .map((e) => e.textContent?.trim())
          .filter(Boolean);

      const images = Array.from(document.querySelectorAll(".image-grid-image"))
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
          const keys = container.querySelectorAll(".index-rowKey");
          const values = container.querySelectorAll(".index-rowValue");

          keys.forEach((keyEl, idx) => {
            const key = keyEl.textContent?.trim();
            const val = values[idx]?.textContent?.trim();
            if (key && val) specification.push(`${key}: ${val}`);
          });
        });

      return {
        brand: document.querySelector(".pdp-title")?.textContent || "",
        title: document.querySelector(".pdp-name")?.textContent || "",
        rating:
          document.querySelector(".index-overallRating")?.textContent || "",
        ratingCount:
          document.querySelector(".index-ratingsCount")?.textContent || "",
        SRP: document.querySelector(".pdp-price strong")?.textContent || "",
        MRP: document.querySelector(".pdp-mrp s")?.textContent || "",
        images,
        productDetails: textArr(".pdp-productDescriptorsContainer"),
        sizeAndFit: textArr(".pdp-sizeFitDesc"),
        materialAndCare: textArr(".pdp-sizeFitDesc"),
        specification,
        seller: textArr(".supplier-productSellerName"),
      };
    });

    return {
      href: url,
      ...details,
    };
  } catch (err: any) {
    console.error(`❌ Failed href: ${href} =>`, err?.message || err);
    return null;
  }
}

export async function retry(fn: Function, retries = 3) {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((r) => setTimeout(r, 1000));
    return retry(fn, retries - 1);
  }
}
