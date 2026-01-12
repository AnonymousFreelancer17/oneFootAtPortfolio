import express from "express";

// imporng router from files
import limeroad_router from "./routes/limeroad.router";
import blinkit_router from "./routes/blinkit.router";

import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// allowing cors nd json format
app.use(express.json());
app.use(cors());

// routing limeroad
app.use("/limeroad", limeroad_router);

// routing blinkit
app.use("/blinkit", blinkit_router);

const port = process.env.SCRAPPER_SERVICE_PORT || 3333;
const server = app.listen(port, () => {
  console.log(
    `Listening at SCRAPPER_SERVICE_SERVER - http://localhost:${port}/api`
  );
});
server.on("error", console.error);
