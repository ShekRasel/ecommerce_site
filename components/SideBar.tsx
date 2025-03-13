"use client";
import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import HeaderMenuData from "@/constant/HeaderMenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";

interface sideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: FC<sideBarProps> = ({ isOpen, onClose }) => {
  const path = usePathname();
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50   hoverEffect  w-full  bg-[rgba(55,54,54,0.5)] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div className="min-w-72 max-w-96 bg-darkColor h-full p-10 border-r border-r-white ">
        <div className="text-white flex justify-between  items-center">
          <button onClick={onClose}>
            <Logo className="text-white font-bold">Amazona</Logo>
          </button>
          <button className="hoverEffect cursor-pointer" onClick={onClose}>
            <X className=" hoverEffect hover:text-red-400" />
          </button>
        </div>
        <div className="text-white mt-4 flex flex-col gap-3.5">
          {HeaderMenuData?.map((item) => (
            <Link
              onClick={onClose}
              href={item.link}
              key={item.title}
              className={` hoverEffect font-semibold relative group ${
                path === item?.link && "text-red-400"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
            <SocialMedia/>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
