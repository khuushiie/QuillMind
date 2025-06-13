import express from "express";
import { cohereAIController } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", cohereAIController);

export default router;