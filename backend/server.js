import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import aiRoutes from './routes/ai.js';
import authRoutes from "./routes/auth.js";
import documentRoutes from "./routes/documentRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://quillmind.vercel.app/'],
  credentials: true
}));
app.use(express.json());
app.options("*", cors());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/documents", documentRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });