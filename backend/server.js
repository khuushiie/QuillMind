import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import aiRoutes from './routes/ai.js';
import authRoutes from "./routes/auth.js";
import documentRoutes from "./routes/documentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Proper CORS setup
app.use(cors({
  origin: ['http://localhost:5173', 'https://quillmind.vercel.app'],
  credentials: true
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/documents", documentRoutes);

// ✅ MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port: ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
