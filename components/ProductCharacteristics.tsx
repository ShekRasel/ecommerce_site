'use client'
import { Product } from "@/sanity.types";
import { ArrowBigUp } from "lucide-react";
import React, { useState } from "react";

interface Props {
  product: Product;
}

const ProductCharacteristics = ({ product }: Props) => {
  const [characteristics, setIsCharacteristics] = useState(false);
  return (
    <div className="mt-10">
      <div className="flex  items-center">
        <p className="pr-15 text-darkcolor font-semibold ">{product.name}</p>
        <span className="" onClick={()=>setIsCharacteristics(!characteristics)}>
          <ArrowBigUp className={`${characteristics ? 'rotate-180 hoverEffect':''}`}/>
        </span>
       </div>
        {characteristics && (<div className="flex justify-between mt-5">
            <div className="text-gray-500 text-sm flex flex-col gap-1.5">
                <h2>Brand</h2>
                <h2>Collection</h2>
                <h2>Type</h2>
                <h2>Stock</h2>
                <h2>Variant</h2>
            </div>
            <div className="font-semibold text-sm text-right flex flex-col gap-1.5">
                <h2>Unknown</h2>
                <h2>2025</h2>
                <h2>{product?.variants}</h2>
                <div>{product.stock !== 0 ? (<h1>Available</h1>) : (<h2>Out of stock</h2>)}</div>
                <h2>{product?.intro}</h2>
            </div>
        </div>)}
    </div>
  );
};

export default ProductCharacteristics;
