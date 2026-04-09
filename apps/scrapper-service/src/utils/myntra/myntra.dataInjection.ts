export async function saveCategoriesToDB(data: any, scrapperDb: any) {
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

export async function saveProductsToDB(
  products: any[],
  categoryId: string,
  scrapperDb: any,
) {
  if (!products.length) return;

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
    productDetails: p.productDetails || [],
    sizeAndFit: p.sizeAndFit || [],
    materialAndCare: p.materialAndCare || [],
    specification: p.specification || [],
    seller: p.seller || [],
    categoryId,
  }));

  const ops = formattedProducts.map((p) => ({
    q: { productCode: p.productCode }, // filter
    u: { $setOnInsert: p }, // update
    upsert: true,
  }));

  const chunkSize = 100;

  for (let i = 0; i < ops.length; i += chunkSize) {
    const chunk = ops.slice(i, i + chunkSize);

    await scrapperDb.$runCommandRaw({
      update: "myntra_products_v1",
      updates: chunk,
    });
  }

  // console.log(`💾 Saved ${formattedProducts.length} products`);
}
