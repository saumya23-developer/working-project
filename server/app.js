import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Allow requests from your frontend
app.use(express.json()); // Parse JSON request bodies

// Static files
app.use("/uploads", express.static(join(__dirname, "uploads")));

// Routes
app.use("/auth", authRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
