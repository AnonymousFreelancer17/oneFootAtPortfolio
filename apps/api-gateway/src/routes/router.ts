const express = require("express");
import { NextFunction, Request, Response } from "express";
import safeReadJSON from "../../src/utility/SafeReadJSON";
import path from "path";
// import { getGeoLocation } from "../controller/geo.controller";


const router = express.Router();

router.get('/',(req: Request,res: Response, next: NextFunction)=>{
    res.json({
        message : "Welcome to api-gateway"
    })
});

 

// router.get('/geo', getGeoLocation);


export default router;
