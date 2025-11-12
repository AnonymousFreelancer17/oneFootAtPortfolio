import express, { Request, Response } from "express";
import { scrapeLimeroadWithSession } from "../controller/scrapeLimeroad";
import fs from "fs";
import path from "path";
import { scrapeBlinkitCategoryWithSession, scrapeBlinkitProductsWithSession } from "../controller/blinkit";

const router = express.Router();

router.get("/limeroad", async (req: Request, res: Response) => {
  try {
    console.log("🕵️ Starting Limeroad scrape...");
    const data = await scrapeLimeroadWithSession();

    // Save data to JSON file
    const outputPath = path.join(__dirname, "../data/limeroad_data.json");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log("✅ Scraping completed and saved to limeroad_data.json");
    res.json({ success: true, count: data.length, data });
  } catch (error: any) {
    console.error("❌ Scraping failed:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/blinkit-categories", async (req: Request, res: Response) => {
  try {
    console.log("🕵️ Starting Blinkit scrape...");
    const data = await scrapeBlinkitCategoryWithSession();

    // Save data to JSON file
    const outputPath = path.join(__dirname, "../data/blinkit_categories.json");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log("✅ Scraping completed and saved to blinkit_category.json");
    res.json({ success: true, count: data.length, data });
  } catch (error: any) {
    console.error("❌ Scraping failed:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


router.get("/blinkit-products", async (req: Request, res: Response) => {
  try {
    console.log("🕵️ Starting Blinkit scrape...");
    const data = await scrapeBlinkitProductsWithSession();

    // Save data to JSON file
    const outputPath = path.join(__dirname, "../data/blinkit_products.json");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log("✅ Scraping completed and saved to blinkit_products.json");
    res.json({ success: true, count: data.length, data });
  } catch (error: any) {
    console.error("❌ Scraping failed:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});




export default router;
