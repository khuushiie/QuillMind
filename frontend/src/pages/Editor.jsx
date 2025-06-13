import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StarterKit from "@tiptap/starter-kit";
import { motion } from "framer-motion";
import { fetchAIResponse } from "../api/aiService";
const API = import.meta.env.VITE_APP_API_URL;

// Reusable button component
const Button = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl text-sm shadow-md hover:scale-105 transition-transform"
  >
    <span>{icon}</span>
    {label}
  </button>
);

// Guest login checker
const isLoggedIn = () => !!localStorage.getItem("token");

export default function Editor() {
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams(); // ✅ Declared only once here
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing something amazing...</p>",
  });

  // ✅ Load document by ID if editing
  useEffect(() => {
    const fetchDocument = async () => {
      if (!id) return;

      try {
        const res = await axios.get(`${API}/documents/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const doc = res.data;
        setTitle(doc.title);
        setContent(doc.content);
        editor?.commands.setContent(doc.content);
      } catch (err) {
        setMessage("❌ Failed to load document.");
      }
    };

    fetchDocument();
  }, [id, editor]);

  const handleFeatureClick = async (feature) => {
    if (!editor) return;

    const userText = editor.getText().trim();
    if (!userText) return;

    if (!isLoggedIn()) {
      const usage = parseInt(localStorage.getItem("guest_usage") || "0", 10);
      if (usage >= 3) {
        setAiResponse("🚫 Free usage limit reached. Please login.");
        return;
      } else {
        localStorage.setItem("guest_usage", usage + 1);
      }
    }

    setLoading(true);
    setAiResponse("");

    try {
      const result = await fetchAIResponse(feature, userText);
      setAiResponse(result);
    } catch (err) {
      setAiResponse("❌ Error: Failed to fetch AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-10">
        {/* Header + Title input */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-3">
            QuillMind Editor 📝
          </h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title..."
            className="w-full max-w-lg px-4 py-2 rounded-xl border border-indigo-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Editor area */}
        <EditorContent
          editor={editor}
          className="prose prose-sm sm:prose lg:prose-lg max-w-none bg-white rounded-xl p-4 mb-6 border border-gray-300 min-h-[200px]"
        />

        {/* AI Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Button label="Fix Grammar" icon="✏️" onClick={() => handleFeatureClick("Fix Grammar")} />
          <Button label="Rewrite" icon="🔄" onClick={() => handleFeatureClick("Rewrite")} />
          <Button label="Summarize" icon="📑" onClick={() => handleFeatureClick("Summarize")} />
          <Button label="Paraphrase" icon="🔁" onClick={() => handleFeatureClick("Paraphrase")} />
          <Button label="Continue Writing" icon="✍️" onClick={() => handleFeatureClick("Continue Writing")} />
          <Button label="ELI5" icon="🧠" onClick={() => handleFeatureClick("ELI5")} />
        </div>

        {/* Guest usage info */}
        {!isLoggedIn() && (
          <p className="text-sm text-center text-gray-600 mb-6">
            Free uses left: {3 - (parseInt(localStorage.getItem("guest_usage") || "0", 10))}
          </p>
        )}

        {/* Loader */}
        {loading && (
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            ></motion.div>
          </div>
        )}

        {/* AI Output */}
        {!loading && aiResponse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-indigo-50 border border-indigo-200 text-indigo-800 p-4 rounded-xl shadow-inner"
          >
            <h2 className="font-semibold mb-2">AI Output:</h2>
            <p>{aiResponse}</p>
          </motion.div>
        )}

        {/* Save or Update */}
        <Button
          label={id ? "💾 Update Document" : "💾 Save Document"}
          icon="📥"
          onClick={async () => {
            if (!editor || !editor.getText().trim()) return;

            try {
              const payload = {
                title: title || "Untitled Document",
                content: editor.getHTML(),
              };

              const headers = {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              };

              if (id) {
                await axios.put(`${API}/documents/${id}`, payload, { headers });
                setMessage("✅ Document updated!");
              } else {
                await axios.post("${API}/api/documents", payload, { headers });
                setMessage("✅ Document saved!");
              }
            } catch (err) {
              setMessage("❌ Failed to save/update document.");
            }
          }}
        />

        {/* Message */}
        {message && (
          <p className="mt-4 text-center font-medium text-sm text-green-600">
            {message}
          </p>
        )}
      </div>
    </motion.div>
  );
}
