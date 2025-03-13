'use client'
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideBar from "./SideBar";

function MobileMenu() {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <>
   
    <button className="lg:hidden cursor-pointer" onClick={()=>setIsSideBar(!isSideBar)}>
      <AlignLeft />
    </button>
    <div className="lg:hidden ">
      <SideBar isOpen = {isSideBar} onClose = {()=> setIsSideBar(false)}/>
    </div>
    </>
  );
}

export default MobileMenu;
