import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { motion } from "framer-motion";

const Button = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl text-sm shadow-md hover:scale-105 transition-transform"
  >
    <span>{icon}</span>
    {label}
  </button>
);

export default function Editor() {
  const [aiResponse, setAiResponse] = useState("");
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing something amazing...</p>",
  });

  const handleFeatureClick = (feature) => {
    setAiResponse(`🔧 ${feature} feature is under development.`);
    // Later: call backend with editor.getHTML() or editor.getText()
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 text-center mb-8">
          QuillMind Editor 📝
        </h1>

        <EditorContent
          editor={editor}
          className="prose prose-sm sm:prose lg:prose-lg max-w-none bg-white rounded-xl p-4 mb-6 border border-gray-300 min-h-[200px]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Button label="Fix Grammar" icon="✏️" onClick={() => handleFeatureClick("Fix Grammar")} />
          <Button label="Rewrite" icon="🔄" onClick={() => handleFeatureClick("Rewrite")} />
          <Button label="Summarize" icon="📑" onClick={() => handleFeatureClick("Summarize")} />
          <Button label="Paraphrase" icon="🔁" onClick={() => handleFeatureClick("Paraphrase")} />
          <Button label="Continue Writing" icon="✍️" onClick={() => handleFeatureClick("Continue Writing")} />
          <Button label="ELI5" icon="🧠" onClick={() => handleFeatureClick("ELI5")} />
        </div>

        {aiResponse && (
          <div className="bg-indigo-50 border border-indigo-200 text-indigo-800 p-4 rounded-xl shadow-inner">
            <h2 className="font-semibold mb-2">AI Output:</h2>
            <p>{aiResponse}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}


