import express, { Request, Response , NextFunction } from "express";
import fs from "fs";
import path from "path";
import { scrapeBlinkitCategoryWithSession, scrapeBlinkitProductsWithSession } from "../controller/blinkit";
 
const router = express.Router();

router.get('/',(req:Request ,res: Response,next:NextFunction)=>{
  res.status(200).send(
    "Hello from scrapper services"
  )
})


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
