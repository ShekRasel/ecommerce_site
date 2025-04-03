"use client";
// import { HeaderMenuData } from "@/constant";
import { CATEGORIES_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu({categories}:{categories:CATEGORIES_QUERYResult | undefined}) {
  const path = usePathname();

  return (
    <div className={`lg:inline-flex hidden gap-5`}>
      <Link href={'/'} className={`hover:text-black hoverEffect  relative group ${
            path === '/' ? "text-darkColor font-bold" : 'font-semibold'
          }`}>
        Home
        <span
            className={`absolute -bottom-0.5 left-1/2 h-0.5 bg-darkColor hoverEffect   w-0  group-hover:w-1/2 group-hover:left-0 ${
              path === '/' && "w-1/2"
            }`}
          />
          <span />
          <span
            className={`absolute -bottom-0.5 right-1/2 h-0.5 bg-darkColor hoverEffect   w-0  group-hover:w-1/2 group-hover:right-0 ${
              path === '/' && "w-1/2"
            }`}
          />
      </Link>
      {categories?.map((category) => (
        <Link
          href={`/category/${category?.slug?.current}`}
          key={category?._id}
          className={`hover:text-black hoverEffect relative group ${
            path === `/category/${category?.slug?.current}` ? "text-darkColor font-bold" : 'font-semibold'
          }`}
        >
          {category.title}

          <span
            className={`absolute -bottom-0.5 left-1/2 h-0.5 bg-darkColor hoverEffect   w-0  group-hover:w-1/2 group-hover:left-0 ${
              path === `/category/${category?.slug?.current}` && "w-1/2"
            }`}
          />
          <span />
          <span
            className={`absolute -bottom-0.5 right-1/2 h-0.5 bg-darkColor hoverEffect   w-0  group-hover:w-1/2 group-hover:right-0 ${
              path === `/category/${category?.slug?.current}` && "w-1/2"
            }`}
          />
          <span />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
