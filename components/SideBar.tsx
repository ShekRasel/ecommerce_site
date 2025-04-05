"use client";
import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { HeaderMenuData } from "@/constant";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

interface sideBarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CATEGORIES_QUERYResult | undefined;
}

const SideBar: FC<sideBarProps> = ({ isOpen, onClose, categories }) => {
  const path = usePathname();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 hoverEffect w-full bg-[rgba(55,54,54,0.5)] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div className="min-w-72 max-w-96 bg-darkColor h-full p-10 border-r border-r-white ">
        {/* Top - Logo & Close Button */}
        <div className="text-white flex justify-between items-center">
          <button onClick={onClose}>
            <Logo className="text-white font-extrabold italic">Shynzo</Logo>
          </button>
          <button className="hoverEffect cursor-pointer" onClick={onClose}>
            <X className="hoverEffect hover:text-red-400" />
          </button>
        </div>

        {/* Static Menu (Home, About, etc.) */}
        <div className="text-white mt-4 flex flex-col gap-3.5">
          {HeaderMenuData?.map((item) => (
            <Link
              onClick={onClose}
              href={item.link}
              key={item.title}
              className={`hoverEffect font-semibold relative group ${
                path === item?.link ? "text-red-400" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* 🔥 Dynamic Categories from props */}
        <div className="text-white mt-6 flex flex-col gap-3.5 border-t border-gray-400 pt-5">
          <span className="text-sm text-gray-400 uppercase">Categories</span>
          {categories?.map((category) => (
            <Link
              onClick={onClose}
              href={`/category/${category?.slug?.current}`}
              key={category?._id}
              className={`hoverEffect font-semibold relative group ${
                path === `/category/${category?.slug?.current}` ? "text-red-400" : ""
              }`}
            >
              {category.title}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-6">
          <SocialMedia />
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
