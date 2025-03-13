"use client";
import HeaderMenuData from "@/constant/HeaderMenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu() {
  const path = usePathname();

  return (
    <div className={`lg:inline-flex hidden gap-5`}>
      {HeaderMenuData?.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          className={`hover:text-black hoverEffect font-semibold relative group ${
            path === item?.link && "text-red-400"
          }`}
        >
          {item.title}

          <span
            className={`absolute -bottom-0.5 left-1/2 h-0.5 bg-darkColor hoverEffect   w-0  group-hover:w-1/2 group-hover:left-0 ${
              path === item?.link && "w-1/2"
            }`}
          />
          <span />
          <span
            className={`absolute -bottom-0.5 right-1/2 h-0.5 bg-darkColor hoverEffect   w-0  group-hover:w-1/2 group-hover:right-0 ${
              path === item?.link && "w-1/2"
            }`}
          />
          <span />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
