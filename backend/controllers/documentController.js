// controllers/documentController.js
import Document from "../models/Document.js";

// POST: Create new document
export const createDocument = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newDoc = new Document({
      user: req.userId,
      title,
      content,
    });
    const savedDoc = await newDoc.save();
    res.status(201).json(savedDoc);
  } catch (err) {
    res.status(500).json({ message: "Failed to create document." });
  }
};

// GET: Get document by ID
export const getDocumentById = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc || doc.user.toString() !== req.userId) {
      return res.status(404).json({ message: "Document not found or unauthorized." });
    }
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch document." });
  }
};

// PUT: Update document by ID
export const updateDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc || doc.user.toString() !== req.userId) {
      return res.status(404).json({ message: "Document not found or unauthorized." });
    }

    doc.title = req.body.title || doc.title;
    doc.content = req.body.content || doc.content;

    const updatedDoc = await doc.save();
    res.json(updatedDoc);
  } catch (err) {
    res.status(500).json({ message: "Failed to update document." });
  }
};

// DELETE: Delete document by ID
export const deleteDocumentById = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc || doc.userId.toString() !== req.userId) {
      return res.status(404).json({ message: "Document not found or unauthorized." });
    }

    await doc.deleteOne();
    res.json({ message: "Document deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete document." });
  }
};