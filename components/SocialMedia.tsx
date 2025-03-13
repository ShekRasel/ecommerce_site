import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

function SocialMedia() {
  const socialMediaIcons = [
    { id: 1, icon: <Facebook />, link: "https://www.facebook.com" },
    { id: 2, icon: <Youtube />, link: "https://www.youtube.com" },
    { id: 3, icon: <Instagram />, link: "https://www.instagram.com" },
    { id: 4, icon: <Linkedin />, link: "https://www.linkedin.com" },
  ];
  
  return (
    <div className="flex mt-8 gap-5 text-white">
      {socialMediaIcons.map((icons)=>(
        <Link href={icons.link} key={icons.id} target="_blank" className="border rounded-xl border-white p-2">

          {icons.icon}
        
        </Link>
      ))}
    </div>
  );
}

export default SocialMedia;
