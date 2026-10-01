"use client";
import React from "react";
import Logo from "./Logo";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <div role="status" aria-label="Loading store" className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-[#fafbf7]">
      <div className="flex flex-col items-center justify-center gap-5">
        <Logo className="text-3xl">Shynzo</Logo>
        <div className="h-px w-32 overflow-hidden bg-black/10">
          <motion.div animate={{x: ["-100%", "200%"]}} transition={{repeat:Infinity, duration : 1.2, ease: "easeInOut"}} className="h-full w-1/2 bg-amber-600" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">Preparing your edit</span>
      </div>
    </div>
  );
};

export default Loading;
