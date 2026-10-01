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
        <motion.div className="group aspect-[4/5] w-full overflow-hidden rounded-3xl border border-black/5 bg-[#eaf0e6]"
        
        key={active?._key}
        initial={{opacity : 0}}
        animate= {{opacity:1}}
        
        transition={{duration:0.5}}
        >
          <Image
            src={urlFor(active).url()}
            alt="Product image"
            width={700}
            height={700}
            priority
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image)=>(
          <button key={image?._key} onClick={()=>setActive(image)} className={`aspect-square overflow-hidden rounded-xl border bg-white p-1 ${active?._key === image?._key ? 'ring-2 ring-neutral-950 ring-offset-2' :'border-black/5' }`}>
            <Image src={urlFor(image).url()} alt="Product thumbnail" width={100} height={100} className="h-full w-full rounded-lg object-cover"/>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
