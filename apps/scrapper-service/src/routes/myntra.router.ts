import express, { Request, Response, NextFunction } from "express";
import { scrapperDb } from "../../../../libs/database/src/clients/scrapper.client";

import { scrapeMyntraProductdetails } from "../controller/myntra.controller";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    await scrapeMyntraProductdetails();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

router.get("/categories", async (req, res) => {
  try {
    const products = await scrapperDb.myntraProduct.findMany({
      select: {
        rootCategory: true,
        groupCategory: true,
        categorySlug: true,
        images: true, // ✅ corrected field
      },
    });

    const treeMap = new Map<string, any>();

    products.forEach((product) => {
      const { rootCategory, groupCategory, categorySlug, images } = product;

      // pick first image safely
      const image =
        Array.isArray(images) ? images[0] : images;

      // ROOT
      if (!treeMap.has(rootCategory)) {
        treeMap.set(rootCategory, {
          name: rootCategory,
          image,
          groups: new Map(),
        });
      }

      const root = treeMap.get(rootCategory);

      // GROUP
      if (!root.groups.has(groupCategory)) {
        root.groups.set(groupCategory, {
          name: groupCategory,
          image,
          categories: new Map(),
        });
      }

      const group = root.groups.get(groupCategory);

      // CATEGORY
      if (!group.categories.has(categorySlug)) {
        group.categories.set(categorySlug, {
          slug: categorySlug,
          image,
        });
      }
    });

    const formatted = Array.from(treeMap.values()).map((root) => ({
      name: root.name,
      image: root.image,
      groups: Array.from(root.groups.values()).map((group: any) => ({
        name: group.name,
        image: group.image,
        categories: Array.from(group.categories.values()),
      })),
    }));

    return res.status(200).json({
      success: true,
      data: formatted,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Something went wrong! : ${error}`,
    });
  }
});

router.get("/categories/:rootCategory", async (req, res) => {
  try {
    const { rootCategory } = req.params;

    const products = await scrapperDb.myntraProduct.findMany({
      where: { rootCategory },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Something went wrong! : ${error}`,
    });
  }
});

router.get("/categories/:rootCategory/:slugCategory", async (req, res) => {
  try {
    const { rootCategory, slugCategory } = req.params;

    const products = await scrapperDb.myntraProduct.findMany({
      where: {
        rootCategory,
        categorySlug: slugCategory,
      },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Something went wrong! : ${error}`,
    });
  }
});

router.get("/brands", async (req, res) => {
  try {
    const { name } = req.query;

    const products = await scrapperDb.myntraProduct.findMany({
      where: name
        ? {
            brand: {
              contains: String(name),
              mode: "insensitive",
            },
          }
        : undefined,
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Something went wrong! : ${error}`,
    });
  }
});

router.get("/brands/list", async (req, res) => {
  try {
    const brands = await scrapperDb.myntraProduct.findMany({
      distinct: ["brand"],
      select: { brand: true },
    });

    return res.json({
      success: true,
      data: brands.map((b) => b.brand),
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
