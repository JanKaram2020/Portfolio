"use client";

import { motion } from "framer-motion";
import React from "react";
import AnimatedLogo from "components/AnimatedLogo";

const HelloSection = () => (
  <div className="h-screen p-30px gap-80px md:gap-40px lg:gap-30px xl:gap-10px flex flex-col justify-center items-center">
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="text-(red-400 5xl)"
    >
      Hello, I'm
    </motion.h1>
    <AnimatedLogo />
    <span className="hidden">
      <h1>Jan Karam</h1>
    </span>
  </div>
);
export default HelloSection;
