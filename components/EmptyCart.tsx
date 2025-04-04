"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
const EmptyCart = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8">
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
          <h2 className="text-3xl font-semibold ">Your cart is felling lonely</h2>
          <p className="text-gray-600">
            It looks like you have&apos;t added anything to your cart yet. Let&apos; change and find some amazing products for you!
          </p>
        </div>
        <Link href={'/'} className="block bg-darkColor text-center py-2.5 rounded-full text-sm font-semibo ld hoverEffect text-white">
        Discover Products</Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
