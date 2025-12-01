const express = require("express");
import { NextFunction, Request, Response } from "express";
import { userRegistration } from "../controller/auth.controller";


const router = express.Router();

router.get('/',(req: Request,res: Response,next: NextFunction)=>{
    res.status(200).send('Hello from auth scrapper services')
})

router.post('/register', userRegistration)

export default router;