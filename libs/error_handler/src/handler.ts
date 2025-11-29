import { AppError } from "./index.js";
import {Request,Response,NextFunction} from 'express'

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      details: err.details || null,
    });
  }

  console.error("UNEXPECTED ERROR:", err);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}
