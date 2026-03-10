import express from "express";
import auth_router from "./routes/auth.routes";
import cors from "cors";
import dotenv from "dotenv";

// importing error handler from libs
import { errorHandler } from "../../../libs/error_handler/src/handler";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:4300",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// 2️⃣ Body parsers (ONLY ONCE)
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// 3️⃣ Debug logger (confirms request reaches server)
app.use((req, _res, next) => {
  console.log("➡️ Incoming:", req.method, req.url);
  next();
});

// 4️⃣ Abort detection (good, keep it)
app.use((req, _res, next) => {
  req.on("aborted", () => {
    console.warn("⚠️ Request aborted:", req.method, req.url);
  });
  next();
});

// 5️⃣ ROUTES (IMPORTANT FIX HERE 👇)
app.use("/", auth_router);

// 6️⃣ Error handler LAST
app.use(errorHandler);

/* ========================= */

const port = process.env.AUTH_SERVICE_PORT || 8000;

const server = app.listen(port, () => {
  console.log(
    `✅ AUTH SERVICE RUNNING → http://localhost:${port}`
  );
});

server.on("error", console.error);
