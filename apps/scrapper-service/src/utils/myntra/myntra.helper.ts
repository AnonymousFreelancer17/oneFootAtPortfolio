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

export async function getExistingProductCodes(scrapperDb:any): Promise<Set<string>> {
  const rows = await scrapperDb.myntraProduct.findMany({
    select: { productCode: true },
  });

  return new Set(
    rows
      .map((r:any) => r.productCode)
      .filter((code:any): code is string => typeof code === "string"),
  );
}


export function filterRemainingProducts(
  allProducts: any[],
  existingCodes: Set<string>,
) {
  return allProducts.filter((p) => !existingCodes.has(p.productCode));
}
