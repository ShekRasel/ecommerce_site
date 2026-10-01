'use client'
import { Product } from "@/sanity.types";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface Props {
  product: Product;
}

const ProductCharacteristics = ({ product }: Props) => {
  const [characteristics, setIsCharacteristics] = useState(false);
  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-white px-5 py-4">
      <button className="flex w-full items-center justify-between text-left" onClick={()=>setIsCharacteristics(!characteristics)}>
        <span className="font-semibold">Product details</span>
        <ChevronDown className={`size-5 transition ${characteristics ? 'rotate-180':''}`}/>
      </button>
      {characteristics && (<div className="mt-5 flex justify-between border-t border-black/5 pt-5">
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
