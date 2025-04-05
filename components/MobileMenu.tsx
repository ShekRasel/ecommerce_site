'use client'
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

function MobileMenu({categories}:{categories:CATEGORIES_QUERYResult | undefined}) {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <>
   
    <button className="lg:hidden cursor-pointer" onClick={()=>setIsSideBar(!isSideBar)}>
      <AlignLeft />
    </button>
    <div className="lg:hidden ">
      <SideBar isOpen = {isSideBar} onClose = {()=> setIsSideBar(false)} categories={categories}/>
    </div>
    </>
  );
}

export default MobileMenu;
