import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_APP_API_URL;

export default function MyDocuments() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ✅ Fetch documents on mount
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const res = await axios.get(`${API}/documents`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setDocuments(res.data);
            } catch (err) {
                setError("Failed to load documents.");
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    // ✅ Delete document
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this document?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API}/documents/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            // Remove deleted document from state
            setDocuments((prev) => prev.filter((doc) => doc._id !== id));
        } catch (err) {
            alert("Failed to delete document.");
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">📄 My Documents</h1>

                {loading ? (
                    <div className="text-center text-gray-600">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : documents.length === 0 ? (
                    <p className="text-center text-gray-600">No documents found.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {documents.map((doc) => (
                            <div
                                key={doc._id}
                                className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow"
                            >
                                <h2 className="text-xl font-semibold text-indigo-600">{doc.title}</h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    Saved: {new Date(doc.createdAt).toLocaleString()}
                                </p>
                                <div className="mt-3 flex gap-6">
                                    <Link
                                        to={`/editor/${doc._id}`}
                                        className="text-indigo-700 font-medium underline hover:text-indigo-900"
                                    >
                                        Open in Editor
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(doc._id)}
                                        className="text-red-600 font-medium hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}



