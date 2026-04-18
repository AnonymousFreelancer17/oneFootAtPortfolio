const express = require("express");
import { NextFunction, Request, Response } from "express";
import {
  userRegistration,
  verifyUserRegistrationOtp,
} from "../controller/auth.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("Hello from auth services");
});

router.post("/user-register",  (req: Request,res: Response,next: NextFunction)=>{
   
  userRegistration(req,res,next);
 
});

router.post("/verify-user-registration", verifyUserRegistrationOtp);

export default router;
