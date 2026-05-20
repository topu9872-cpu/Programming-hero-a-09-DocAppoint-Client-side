"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-100 h-100 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* 404 Text */}
        <motion.h1
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-8xl md:text-[160px] font-extrabold bg-liner-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold mt-4"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-4 max-w-md mx-auto"
        >
          The page you are looking for might have been removed,
          renamed, or temporarily unavailable.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <Link href="/">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all font-semibold shadow-lg shadow-cyan-500/30">
              <Home size={20} />
              Back Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition-all font-semibold"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;