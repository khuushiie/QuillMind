import React from 'react';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#f1f5f9] via-[#e0e7ff] to-[#fdf2f8] flex items-center justify-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative w-full max-w-2xl p-6 sm:p-10 bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=quillmind"
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
          />

          <h2 className="text-3xl font-bold text-gray-800">Khushi Moon</h2>
          <p className="text-gray-500 text-sm">khushi@example.com</p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <button className="py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition duration-200 font-medium shadow-md hover:scale-105">
              Edit Profile
            </button>
            <button className="py-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition duration-200 font-medium shadow-sm hover:scale-105">
              Change Password
            </button>
            <button className="col-span-1 sm:col-span-2 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition duration-200 font-medium shadow-md hover:scale-105">
              Logout
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}



