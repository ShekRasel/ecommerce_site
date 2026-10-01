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
    <article className="product-tile group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eaf0e6]">
        {product?.images?.[0] && (
          <Link className="block h-full w-full" href={`/products/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              height={500}
              width={500}
              sizes="(max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
              alt={product.name || "Product"}
              className={`h-full w-full object-cover transition duration-700 ${!(product?.stock === 0) && "group-hover:scale-[1.04]"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/55 backdrop-blur-[2px]">
            <p className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950">Out of stock</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-1 pb-3 pt-5">
        <div className="flex-1">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">{product.variants || "Essential"}</p>
          <h3 className="line-clamp-1 text-sm font-semibold tracking-tight sm:text-base"><Link href={`/products/${product.slug?.current}`}>{product.name}</Link></h3>
          <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-neutral-500 sm:text-sm">{product.intro}</p>
        </div>

        <PriceView price={product.price} discount={product.discount} />

        <AddtoCardButton product={product} />
      </div>
    </article>
  );
}

export default ProductCard;
