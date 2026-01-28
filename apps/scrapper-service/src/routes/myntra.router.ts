import express, { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { scrapeMyntraProductdetails, scrapeMyntraProducts } from "../controller/myntra.controller";

const router = express.Router();

router.get(
  "/categories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filePath = path.join(
        process.cwd(),
        "apps/scrapper-service",
        "tmp_cache",
        "myntra/categories.json",
      );

      const jsonData = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(jsonData);

      return res.status(200).json({
        parsed,
      });

      // return await scrapeMyntraCategories();
    } catch (error) {
      return res.status(500).json({
        message: `Something went wrong! : ${error}`,
      });
    }
  },
);

router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filePath = path.join(
        process.cwd(),
        "apps/scrapper-service",
        "tmp_cache",
        "myntra/products.json",
      );

      const jsonData = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(jsonData);

      return res.status(200).json({
        parsed,
      });

      // const data = await scrapeMyntraProducts();

      // return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        message: `Something went wrong! : ${error}`,
      });
    }
  },
);

router.get(
  "/product-details",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const filePath = path.join(
      //   process.cwd(),
      //   "apps/scrapper-service",
      //   "tmp_cache",
      //   "myntra/products.json",
      // );

      // const jsonData = fs.readFileSync(filePath, "utf-8");
      // const parsed = JSON.parse(jsonData);

      // return res.status(200).json({
      //   parsed,
      // });

      const data = await scrapeMyntraProductdetails();

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        message: `Something went wrong! : ${error}`,
      });
    }
  },
);

export default router;
