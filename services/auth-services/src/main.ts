import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  // Mock login
  res.json({ token: "fake-jwt-token", user: { id: 1, name: "Aditya" } });
});

app.get("/verify", (req, res) => {
  res.json({ valid: true });
});

const PORT = process.env.AUTH_SERVICE_PORT || 4001;
app.listen(PORT, () => console.log(`🔐 Auth Service running on port ${PORT}`));
