import React from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

interface Props {
  selectedTab: string;
  className?: string; 
}
function NoProduct({ selectedTab, className}: Props ) {
  return (
    <div className={`bg-gray-100 min-h-80  w-full flex flex-col items-center justify-center  py-10 gap-2.5 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">
          No Procut Available
        </h1>
      </motion.div>
      <motion.p
        className="text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        We are sorry, but there are no products matching on{" "}
        <span className="font-semibold text-xl px-2">{selectedTab}</span>{" "}
        criteria at the moment
      </motion.p>

      <motion.div
        className="flex gap-1.5 text-blue-600 font-semibold"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Loader2 className="animate-spin" />
        <span>We&apos;re restocking shortly</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-gray-500 text-center">
          Please check back later or explore our other product categories.
        </span>
      </motion.p>
    </div>
  );
}

export default NoProduct;
