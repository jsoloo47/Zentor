"use client";
import React from "react";
import { motion } from "framer-motion";

const MiddleCardAnimation = () => {
  return (
    <div className="min-h flex items-center justify-center flex-col absolute inset-0 mx-auto my-auto">
      <motion.div
        className="text-5xl font-medium"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Your Journey,{<br></br>}
        <motion.div
          className="text-5xl font-medium"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <p className="indent-16">Your Zen</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-96 mt-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
      >
        <p className="opacity-[.67] text-sm">
          Craft a mindful narrative for growth, weaving the threads of daily
          insights and aspirations into your personal tapestry.
        </p>
      </motion.div>
    </div>
  );
};

export default MiddleCardAnimation;
