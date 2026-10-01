import React from "react";
import { motion } from "motion/react";
import { PackageSearch } from "lucide-react";

interface Props {
  selectedTab: string;
  className?: string; 
}
function NoProduct({ selectedTab, className}: Props ) {
  return (
    <div className={`surface flex min-h-80 w-full flex-col items-center justify-center gap-3 px-6 py-10 ${className}`}>
      <div className="mb-2 flex size-14 items-center justify-center rounded-full bg-amber-50 text-amber-700"><PackageSearch className="size-6" /></div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">
          This edit is coming soon
        </h1>
      </motion.div>
      <motion.p
        className="text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        There are no products in <span className="font-semibold text-neutral-900">{selectedTab}</span> right now.
      </motion.p>

      <p className="text-sm font-semibold text-amber-700">We&apos;re restocking shortly.</p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-gray-500 text-center">
          Try another collection or check back again soon.
        </span>
      </motion.p>
    </div>
  );
}

export default NoProduct;
