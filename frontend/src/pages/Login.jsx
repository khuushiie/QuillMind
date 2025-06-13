import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        alert("Logged in successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
            <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/30">
                <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
                    Login to QuillMind
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}



