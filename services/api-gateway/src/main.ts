import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();

const services = {
  auth: process.env.AUTH_SERVICE_URL || "http://localhost:4001",
  portfolio: process.env.PORTFOLIO_SERVICE_URL || "http://localhost:4002",
  contact: process.env.CONTACT_SERVICE_URL || "http://localhost:4003",
};

app.use(
  "/auth",
  createProxyMiddleware({ target: services.auth, changeOrigin: true })
);
app.use(
  "/portfolio",
  createProxyMiddleware({ target: services.portfolio, changeOrigin: true })
);
app.use(
  "/contact",
  createProxyMiddleware({ target: services.contact, changeOrigin: true })
);

app.get("/verify", (req, res) => {
  res.json({ valid: true });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/verify`);
});
server.on("error", console.error);
