import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import analyzeRoute from "./routes/analyze";

dotenv.config();

const app = express();

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

app.use("/analyze", analyzeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});