"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}
const ImageView = ({ images = [] }: Props) => {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="w-full md:w-1/2">
      <AnimatePresence>
        <motion.div className="w-full max-h-[550px] min-h-[450px] border rounded-md group overflow-hidden " 
        
        key={active?._key}
        initial={{opacity : 0}}
        animate= {{opacity:1}}
        
        transition={{duration:0.5}}
        >
          <Image
            src={urlFor(active).url()}
            alt="porduct image"
            width={700}
            height={700}
            priority
            className=" max-h-[550px] min-h-[450px] group-hover:scale-110 hoverEffect rounded-md"
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-5   grid grid-cols-4 gap-2">
        {images.map((image)=>(
          <button key={image?. _key} onClick={()=>setActive(image)} className={`${active?._key === image?._key ? 'ring ring-black' :'' } rounded-sm border border-gray-200`}>
            <Image src={urlFor(image).url()} alt="productImage" width={100} height={100} className="w-full h-auto object-cover rounded-sm"/>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
