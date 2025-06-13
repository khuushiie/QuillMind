import express from "express";
import { verifyToken } from "../middleware/auth.js";
import Document from "../models/Document.js"; //

const router = express.Router();

// GET all documents for a logged-in user
router.get("/", verifyToken, async (req, res) => {
    try {
        const documents = await Document.find({ userId: req.userId }).sort({ createdAt: -1 });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch documents" });
    }
});

// POST a new document
router.post("/", verifyToken, async (req, res) => {
    const { title, content } = req.body;
    console.log("📥 Incoming document payload:", { title, content });
    console.log("📌 User ID from token:", req.userId);

    try {
        const newDoc = await Document.create({
            userId: req.userId,
            title,
            content,
        });

        console.log("✅ Document created:", newDoc);
        res.status(201).json({ message: "Document saved", document: newDoc });
    } catch (err) {
        console.error("❌ Error saving document:", err.message);
        res.status(500).json({ message: "Error saving document" });
    }
});


// Get a single document
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const doc = await Document.findOne({ _id: req.params.id, userId: req.userId });
        if (!doc) return res.status(404).json({ message: "Document not found" });
        res.json(doc);
    } catch (err) {
        res.status(500).json({ message: "Error fetching document" });
    }
});

// Update a document
router.put("/:id", verifyToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedDoc = await Document.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            { title, content },
            { new: true }
        );
        if (!updatedDoc) return res.status(404).json({ message: "Document not found" });
        res.json({ message: "Document updated", document: updatedDoc });
    } catch (err) {
        res.status(500).json({ message: "Error updating document" });
    }
});

// DELETE a document
router.delete("/:id", verifyToken, async (req, res) => {
    console.log("🗑️ Delete request for ID:", req.params.id);
    console.log("🧾 Authenticated user ID:", req.userId);

    try {
        const doc = await Document.findOne({ _id: req.params.id, userId: req.userId });

        if (!doc) {
            console.warn("⚠️ Document not found for user");
            return res.status(404).json({ message: "Document not found" });
        }

        await doc.deleteOne();
        console.log("✅ Document deleted:", doc._id);
        res.json({ message: "Document deleted successfully" });
    } catch (err) {
        console.error("❌ Error deleting document:", err.message);
        res.status(500).json({ message: "Error deleting document" });
    }
});


export default router;