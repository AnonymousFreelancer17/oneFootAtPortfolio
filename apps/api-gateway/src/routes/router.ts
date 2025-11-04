const express = require("express");
import { NextFunction, Request, Response } from "express";


const router = express.Router();

router.get('/',(req: Request,res: Response, next: NextFunction)=>{
    res.json({
        message : "Welcome to routes"
    })
});

export default router;
