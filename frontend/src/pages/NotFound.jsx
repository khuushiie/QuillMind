import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 text-center px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-6xl font-extrabold text-indigo-700 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        404
      </motion.h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition duration-300"
      >
        Go back Home
      </Link>
    </motion.div>
  );
}
