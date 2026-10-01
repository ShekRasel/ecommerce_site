"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center px-4 py-12 md:py-20">
      <motion.div initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className="surface w-full max-w-lg space-y-7 p-7 sm:p-10">
        <motion.div animate={{scale:[1,1.1,1] , rotate : [0,5,-5,0] }} transition={{repeat:Infinity , duration:5,ease:'easeInOut'}}
        className=" mx-auto"
        >
          <Image
            src="/emptyCart.webp"
            height={400}
            width={400}
            className=" drop-shadow-lg object-contain"
            alt="empty cart"
          />
        </motion.div>
        <div className="text-center spay-4">
          <h2 className="text-3xl font-semibold tracking-tight">Your bag is waiting</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-500">
            You haven&apos;t added anything yet. Explore our latest edit and find something that feels just right.
          </p>
        </div>
        <Link href={'/'} className="block rounded-full bg-neutral-950 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-700">
        Discover products</Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
