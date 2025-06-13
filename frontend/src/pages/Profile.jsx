import React, { useState } from 'react';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import { motion } from 'framer-motion';
import { FaUserEdit, FaLock } from "react-icons/fa";

export default function ProfilePage() {
  const [active, setActive] = useState("edit");
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-100 p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-indigo-700">{user.name || "Your Name"}</h2>
            <p className="text-sm text-gray-500">{user.email || "you@example.com"}</p>
            {user.bio && (
              <p className="text-sm text-gray-600 mt-2 italic">{user.bio}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActive("edit")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all duration-200 ${active === "edit"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
            >
              <FaUserEdit /> Edit Profile
            </button>
            <button
              onClick={() => setActive("password")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all duration-200 ${active === "password"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
            >
              <FaLock /> Change Password
            </button>
          </div>
        </div>

        {/* Section Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {active === "edit" && <EditProfile />}
          {active === "password" && <ChangePassword />}
        </motion.div>
      </div>
    </motion.div>
  );
}






