import express, { Request, Response, NextFunction } from "express";
import fs from "fs";

// importing controlller
import {
  scrapeLimeroadCategoriesWithSession,
  scrapeLimeroadProducts,
} from "../controller/scrapeLimeroad";

// using cache.utils
// import { getOrSetCache } from "../utils/cache.utils";
import path from "path";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("Hello from limeroad scrapper services");
});

// router.get("/categories", async (req: Request, res: Response) => {
//   try {
//     const data = await getOrSetCache("limeroad/categories", async () => {
//       // const page = req.app.locals.page;
//       // return await scrapeLimeroadCategoriesWithSession();
//     });

//     return res.json({
//       success: true,
//       data,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: `Failed to fetch categories : ${err}`,
//     });
//   }
// });

router.get("/categories" , async(req: Request, res: Response)=>{
  try {
    
    const filePath = path.join(
      process.cwd(),
      "apps/scrapper-service",
      "tmp_cache",
      "limeroad/categories.json"
    );

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(jsonData);

    return res.status(200).json({
      parsed
    })

  } catch (error) {
    return res.status(500).json({
      message : `Something went wrong! : ${error}`,
    })
  }
})

router.get("/products",async(req:Request , res:Response)=>{
    try {
      
      return await scrapeLimeroadProducts();

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: `something went wrong! : ${error}`
      })
    }
});

export default router;
