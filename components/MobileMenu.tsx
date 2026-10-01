'use client'
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

function MobileMenu({categories}:{categories:CATEGORIES_QUERYResult | undefined}) {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <>
   
    <button aria-label="Open navigation" className="icon-button cursor-pointer lg:hidden" onClick={()=>setIsSideBar(!isSideBar)}>
      <AlignLeft className="size-5" />
    </button>
    <div className="lg:hidden ">
      <SideBar isOpen = {isSideBar} onClose = {()=> setIsSideBar(false)} categories={categories}/>
    </div>
    </>
  );
}

export default MobileMenu;
