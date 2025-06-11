import React, { useState } from 'react';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const [active, setActive] = useState("edit");

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            {/* <img
              src="https://i.pravatar.cc/100?img=5"
              alt="profile"
              className="w-20 h-20 rounded-full shadow-lg border-4 border-indigo-200"
            /> */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700">Khushi Moon</h2>
              <p className="text-gray-500">khushi@example.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setActive("edit")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                active === "edit"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActive("password")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                active === "password"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Change Password
            </button>
          </div>
        </div>

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





