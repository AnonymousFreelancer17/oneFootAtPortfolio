const express = require("express");
import { NextFunction, Request, Response } from "express";
import safeReadJSON from "../../src/utility/SafeReadJSON";
import path from "path";
import { getGeoLocation } from "../controller/geo.controller";


const router = express.Router();

router.get('/',(req: Request,res: Response, next: NextFunction)=>{
    res.json({
        message : "Welcome to routes"
    })
});

const DATA_PATH = path.join(process.cwd(), "apps/scrapper-service/data/blinkit_products.json");



router.get('/blinkit-products',async (req: Request,res: Response, next: NextFunction)=>{

    const data = await safeReadJSON(DATA_PATH);
    res.status(200).json({
        data
    })
});


router.get('/geo', getGeoLocation);


export default router;
