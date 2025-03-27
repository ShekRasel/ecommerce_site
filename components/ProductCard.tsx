"use client";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import AddtoCardButton from "./AddtoCardButton";

function ProductCard({ product }: { product: Product }) {
  
  return (
    <div className="border pb-5  rounded-lg group">
      <div className=" overflow-hidden  bg-zinc-100 relative   border-red-500 ">
        {product?.images && (
          <Link href={`/products/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              height={500}
              width={500}
              alt="product image"
              className={`h-72 object-cover rounded-t-md ${!(product?.stock === 0) && "hoverEffect group-hover:scale-105"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className=" bg-[rgba(55,54,54,0.5)] absolute left-0 top-0 h-full w-full flex justify-center items-center rounded-t-md">
            <p className="text-white font-semibold">Out of Stock</p>
          </div>
        )}
      </div>
      <div className="flex  flex-col gap-3 bg-white  px-2 pt-4 font-sans ">
        <h1 className="font-semibold line-clamp-1">{product.name}</h1>
        <h2 className="text-sm h-10 line-clamp-2">{product.intro}</h2>

        <PriceView price={product.price} discount={product.discount} />

        <AddtoCardButton product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
