import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { motion } from "framer-motion";

// Reusable feature button
const FeatureButton = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-sm md:text-base shadow-md hover:scale-105 transition-transform"
  >
    {icon} {label}
  </button>
);

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your thoughts...</p>",
  });

  const handleFeatureClick = (type) => {
    alert(`${type} feature will be integrated soon!`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-8">
          QuillMind Editor 📝
        </h1>

        {/* Editor Toolbar */}
        <div className="flex flex-wrap gap-2 mb-4">
          <FeatureButton label="Bold" icon="🔡" onClick={() => editor?.chain().focus().toggleBold().run()} />
          <FeatureButton label="Italic" icon="✨" onClick={() => editor?.chain().focus().toggleItalic().run()} />
          <FeatureButton label="List" icon="📋" onClick={() => editor?.chain().focus().toggleBulletList().run()} />
        </div>

        {/* Tiptap Editor */}
        <EditorContent editor={editor} className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl bg-white rounded-xl p-4 min-h-[200px] border border-gray-300 shadow-inner focus:outline-none" />

        {/* Feature Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <FeatureButton label="Fix Grammar" icon="✏️" onClick={() => handleFeatureClick("Fix Grammar")} />
          <FeatureButton label="Rewrite" icon="🔄" onClick={() => handleFeatureClick("Rewrite")} />
          <FeatureButton label="Summarize" icon="📑" onClick={() => handleFeatureClick("Summarize")} />
          <FeatureButton label="Paraphrase" icon="🔁" onClick={() => handleFeatureClick("Paraphrase")} />
          <FeatureButton label="Continue Writing" icon="✍️" onClick={() => handleFeatureClick("Continue Writing")} />
          <FeatureButton label="ELI5" icon="🧠" onClick={() => handleFeatureClick("ELI5")} />
        </div>
      </div>
    </motion.div>
  );
}

