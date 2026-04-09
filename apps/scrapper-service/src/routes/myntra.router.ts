import express, { Request, Response, NextFunction } from "express";
import {
  scrapeCategories,
  scrapeProducts,
} from "../controller/myntra.controller";
import { rotateSession } from "../../../../libs/puppeteer-utils/src/index";
import { scrapperDb } from "../../../../libs/database/src/clients/scrapper.client";
import { saveCategoriesToDB } from "../utils/myntra/myntra.dataInjection";

const router = express.Router();

router.get(
  "/scrapeCategories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await rotateSession(scrapeCategories);

      console.log(data);

      if (data) {
        await saveCategoriesToDB(data, scrapperDb);
      } else {
        return;
      }

      return res.status(200).json({
        success: true,
        message: `data stored successfully`,
        data: data,
      });
    } catch (error) {
      console.log("❌ Scraping failed: ", error);
      return res.status(200).json({
        success: false,
        message: `scraping failed`,
        error,
      });
    }
  },
);

router.get(
  "/scrapeProducts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await rotateSession(scrapeProducts);

      return res.status(200).json({
        success: true,
        message: "Products scraped and stored successfully",
      });
    } catch (error) {
      console.log("❌ Scraping failed:", error);

      return res.status(500).json({
        success: false,
        message: "Scraping failed",
        error,
      });
    }
  },
);

//  catgeory routes

// router.get("/categories", async (req, res) => {
//   try {
//     const products = await scrapperDb.myntraProduct.findMany({
//       select: {
//         rootCategory: true,
//         groupCategory: true,
//         categorySlug: true,
//         MRP: true,
//         SRP: true,
//         images: true,
//       },
//     });

//     const discountMap = new Map<string, { min: number; max: number }>();

//     const treeMap = new Map<
//       string,
//       {
//         name: string;
//         image: string | null;
//         groups: Map<
//           string,
//           {
//             name: string;
//             image: string | null;
//             categories: Map<
//               string,
//               {
//                 slug: string;
//                 image: string | null;
//                 minDiscount?: number;
//                 maxDiscount?: number;
//               }
//             >;
//           }
//         >;
//       }
//     >();

//     products.forEach((product) => {
//       const { rootCategory, groupCategory, categorySlug, images, SRP, MRP } =
//         product;

//       if (!rootCategory || !groupCategory || !categorySlug) return;

//       const image = Array.isArray(images) ? images[0] : images || null;

//       // -------------------
//       // CALCULATE DISCOUNT
//       // -------------------
//       if (MRP && SRP) {
//         const mrp = Number(MRP.replace(/[^0-9]/g, ""));
//         const srp = Number(SRP.replace(/[^0-9]/g, ""));

//         if (mrp > 0 && srp > 0) {
//           const discount = ((mrp - srp) / mrp) * 100;

//           const key = `${rootCategory}__${categorySlug}`;

//           if (!discountMap.has(key)) {
//             discountMap.set(key, {
//               min: discount,
//               max: discount,
//             });
//           } else {
//             const existing = discountMap.get(key)!;
//             existing.min = Math.min(existing.min, discount);
//             existing.max = Math.max(existing.max, discount);
//           }
//         }
//       }

//       // -------------------
//       // BUILD TREE
//       // -------------------

//       if (!treeMap.has(rootCategory)) {
//         treeMap.set(rootCategory, {
//           name: rootCategory,
//           image,
//           groups: new Map(),
//         });
//       }

//       const root = treeMap.get(rootCategory)!;

//       if (!root.groups.has(groupCategory)) {
//         root.groups.set(groupCategory, {
//           name: groupCategory,
//           image,
//           categories: new Map(),
//         });
//       }

//       const group = root.groups.get(groupCategory)!;

//       if (!group.categories.has(categorySlug)) {
//         group.categories.set(categorySlug, {
//           slug: categorySlug,
//           image,
//         });
//       }
//     });

//     // -------------------
//     // FORMAT FINAL OUTPUT
//     // -------------------

//     const formatted = Array.from(treeMap.values()).map((root) => ({
//       name: root.name,
//       image: root.image,
//       groups: Array.from(root.groups.values()).map((group) => ({
//         name: group.name,
//         image: group.image,
//         categories: Array.from(group.categories.values()).map((category) => {
//           const key = `${root.name}__${category.slug}`;
//           const discount = discountMap.get(key);

//           return {
//             ...category,
//             minDiscount: discount ? Number(discount.min.toFixed(2)) : 0,
//             maxDiscount: discount ? Number(discount.max.toFixed(2)) : 0,
//           };
//         }),
//       })),
//     }));

//     return res.status(200).json({
//       success: true,
//       data: formatted,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/categories/:rootCategory", async (req, res) => {
//   try {
//     const { rootCategory } = req.params;

//     const products = await scrapperDb.myntraProduct.findMany({
//       where: { rootCategory },
//       select: {
//         groupCategory: true,
//         MRP: true,
//         SRP: true,
//         images: true,
//       },
//     });

//     if (!products.length) {
//       return res.status(404).json({
//         success: false,
//         message: "No products found for this category",
//       });
//     }

//     const groupMap = new Map<
//       string,
//       {
//         name: string;
//         image: string | null;
//         minDiscount: number;
//         maxDiscount: number;
//       }
//     >();

//     products.forEach((product) => {
//       const { groupCategory, MRP, SRP, images } = product;

//       if (!groupCategory) return;

//       const image = Array.isArray(images) ? images[0] : images || null;

//       let discount = 0;

//       if (MRP && SRP) {
//         const mrp = Number(MRP.replace(/[^0-9]/g, ""));
//         const srp = Number(SRP.replace(/[^0-9]/g, ""));

//         if (mrp > 0 && srp > 0) {
//           discount = ((mrp - srp) / mrp) * 100;
//         }
//       }

//       if (!groupMap.has(groupCategory)) {
//         groupMap.set(groupCategory, {
//           name: groupCategory,
//           image,
//           minDiscount: discount,
//           maxDiscount: discount,
//         });
//       } else {
//         const existing = groupMap.get(groupCategory)!;

//         existing.minDiscount = Math.min(existing.minDiscount, discount);

//         existing.maxDiscount = Math.max(existing.maxDiscount, discount);
//       }
//     });

//     const formatted = Array.from(groupMap.values()).map((group) => ({
//       name: group.name,
//       image: group.image,
//       minDiscount: Number(group.minDiscount.toFixed(2)),
//       maxDiscount: Number(group.maxDiscount.toFixed(2)),
//     }));

//     return res.status(200).json({
//       success: true,
//       rootCategory,
//       count: formatted.length,
//       data: formatted,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/categories-simple/:rootCategory", async (req, res) => {
//   try {
//     const { rootCategory } = req.params;
//     const products = await scrapperDb.myntraProduct.findMany({
//       where: { rootCategory },
//       // distinct: ["groupCategory"],
//       select: {
//         groupCategory: true,
//         // productName: true,
//         images: true,
//         MRP: true,
//         SRP: true,
//       },
//     });
//     if (!products.length) {
//       return res
//         .status(404)
//         .json({
//           success: false,
//           message: "No products found for this category",
//         });
//     }
//     const categoryMap = new Map<string, any[]>();
//     products.forEach((product) => {
//       const { groupCategory } = product;
//       if (!groupCategory) return;
//       if (!categoryMap.has(groupCategory)) {
//         categoryMap.set(groupCategory, []);
//       }
//       categoryMap.get(groupCategory)?.push(product);
//     });
//     const formatted = Array.from(categoryMap.entries()).map(
//       ([category, products]) => ({ category, products }),
//     );
//     return res
//       .status(200)
//       .json({
//         success: true,
//         rootCategory,
//         count: formatted.length,
//         data: formatted,
//       });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: `Something went wrong! : ${error}` });
//   }
// });

// product routes

// router.get("/products/:rootCategory", async (req, res) => {
//   try {
//     const { rootCategory } = req.params;

//     const products = await scrapperDb.myntraProduct.findMany({
//       where: { rootCategory },
//       select: {
//         productCode: true,
//         href: true,
//         brand: true,
//         title: true,
//         rating: true,
//         ratingCount: true,
//         SRP: true,
//         MRP: true,
//         images: true,
//         groupCategory: true,
//         categorySlug: true,
//         createdAt: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     const formatted = products.map((product) => {
//       let discount = 0;

//       if (product.MRP && product.SRP) {
//         const mrp = Number(product.MRP.replace(/[^0-9]/g, ""));
//         const srp = Number(product.SRP.replace(/[^0-9]/g, ""));

//         if (mrp > 0 && srp > 0) {
//           discount = ((mrp - srp) / mrp) * 100;
//         }
//       }

//       return {
//         productCode: product.productCode,
//         href: product.href,
//         brand: product.brand,
//         title: product.title,
//         rating: product.rating,
//         ratingCount: product.ratingCount,
//         MRP: product.MRP,
//         SRP: product.SRP,
//         discount: Number(discount.toFixed(2)),
//         image: Array.isArray(product.images) ? product.images : product.images,
//         rootCategory,
//         groupCategory: product.groupCategory,
//         categorySlug: product.categorySlug,
//       };
//     });

//     return res.status(200).json({
//       success: true,
//       rootCategory,
//       count: formatted.length,
//       data: formatted,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/products/:rootCategory/:groups", async (req, res) => {
//   try {
//     const { rootCategory, groups } = req.params;

//     const products = await scrapperDb.myntraProduct.findMany({
//       where: {
//         rootCategory,
//         groupCategory: groups,
//       },
//       select: {
//         productCode: true,
//         href: true,
//         brand: true,
//         title: true,
//         rating: true,
//         ratingCount: true,
//         SRP: true,
//         MRP: true,
//         images: true,
//         categorySlug: true,
//         createdAt: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       take: 50,
//     });

//     if (!products.length) {
//       return res.status(404).json({
//         success: false,
//         message: "No products found for this group",
//       });
//     }

//     const formatted = products.map((product) => {
//       let discount = 0;

//       if (product.MRP && product.SRP) {
//         const mrp = Number(product.MRP.replace(/[^0-9]/g, ""));
//         const srp = Number(product.SRP.replace(/[^0-9]/g, ""));

//         if (mrp > 0 && srp > 0) {
//           discount = ((mrp - srp) / mrp) * 100;
//         }
//       }

//       return {
//         productCode: product.productCode,
//         href: product.href,
//         brand: product.brand,
//         title: product.title,
//         rating: product.rating,
//         ratingCount: product.ratingCount,
//         MRP: product.MRP,
//         SRP: product.SRP,
//         discount: Number(discount.toFixed(2)),
//         image: Array.isArray(product.images) ? product.images : product.images,
//         rootCategory,
//         groupCategory: groups,
//         categorySlug: product.categorySlug,
//       };
//     });

//     return res.status(200).json({
//       success: true,
//       rootCategory,
//       groups,
//       count: formatted.length,
//       data: formatted,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/products/:rootCategory/:group/:category", async (req, res) => {
//   try {
//     const { rootCategory, group, category } = req.params;

//     const products = await scrapperDb.myntraProduct.findMany({
//       where: {
//         rootCategory,
//         groupCategory: group,
//         categorySlug: category,
//       },
//       select: {
//         productCode: true,
//         href: true,
//         brand: true,
//         title: true,
//         rating: true,
//         ratingCount: true,
//         SRP: true,
//         MRP: true,
//         images: true,
//         createdAt: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       take: 100,
//     });

//     if (!products.length) {
//       return res.status(404).json({
//         success: false,
//         message: "No products found",
//       });
//     }

//     const formatted = products.map((product) => {
//       let discount = 0;

//       if (product.MRP && product.SRP) {
//         const mrp = Number(product.MRP.replace(/[^0-9]/g, ""));
//         const srp = Number(product.SRP.replace(/[^0-9]/g, ""));

//         if (mrp > 0 && srp > 0) {
//           discount = ((mrp - srp) / mrp) * 100;
//         }
//       }

//       return {
//         productCode: product.productCode,
//         href: product.href,
//         brand: product.brand,
//         title: product.title,
//         rating: product.rating,
//         ratingCount: product.ratingCount,
//         MRP: product.MRP,
//         SRP: product.SRP,
//         discount: Number(discount.toFixed(2)),
//         image: Array.isArray(product.images) ? product.images : product.images,
//       };
//     });

//     return res.status(200).json({
//       success: true,
//       rootCategory,
//       group,
//       category,
//       count: formatted.length,
//       data: formatted,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/product/:productCode", async (req, res) => {
//   try {
//     const { productCode } = req.params;

//     const product = await scrapperDb.myntraProduct.findUnique({
//       where: { productCode },
//       select: {
//         productCode: true,
//         href: true,
//         brand: true,
//         title: true,
//         rating: true,
//         ratingCount: true,
//         SRP: true,
//         MRP: true,
//         images: true,
//         rootCategory: true,
//         groupCategory: true,
//         categorySlug: true,
//         createdAt: true,
//       },
//     });

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     let discount = 0;

//     if (product.MRP && product.SRP) {
//       const mrp = Number(product.MRP.replace(/[^0-9]/g, ""));
//       const srp = Number(product.SRP.replace(/[^0-9]/g, ""));

//       if (mrp > 0 && srp > 0) {
//         discount = ((mrp - srp) / mrp) * 100;
//       }
//     }

//     const formatted = {
//       productCode: product.productCode,
//       href: product.href,
//       brand: product.brand,
//       title: product.title,
//       rating: product.rating,
//       ratingCount: product.ratingCount,
//       MRP: product.MRP,
//       SRP: product.SRP,
//       discount: Number(discount.toFixed(2)),
//       images: Array.isArray(product.images) ? product.images : [product.images],
//       rootCategory: product.rootCategory,
//       groupCategory: product.groupCategory,
//       categorySlug: product.categorySlug,
//       createdAt: product.createdAt,
//     };

//     return res.status(200).json({
//       success: true,
//       data: formatted,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/brands", async (req, res) => {
//   try {
//     const { name } = req.query;

//     const products = await scrapperDb.myntraProduct.findMany({
//       where: name
//         ? {
//             brand: {
//               contains: String(name),
//               mode: "insensitive",
//             },
//           }
//         : undefined,
//       orderBy: { createdAt: "desc" },
//     });

//     return res.status(200).json({
//       success: true,
//       count: products.length,
//       data: products,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Something went wrong! : ${error}`,
//     });
//   }
// });

// router.get("/brands/list", async (req, res) => {
//   try {
//     const brands = await scrapperDb.myntraProduct.findMany({
//       distinct: ["brand"],
//       select: { brand: true },
//     });

//     return res.json({
//       success: true,
//       data: brands.map((b) => b.brand),
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error });
//   }
// });

// router.get("/full", async (req, res) => {
//   await runFullMyntraScraper();
//   res.json({ message: "Full scraping started" });
// });

export default router;
