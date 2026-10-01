import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";

async function HomeBanner() {
  const products = await client.fetch<Product[]>(
    `*[_type == 'product' && defined(images[0].asset) && defined(slug.current)] | order(name asc)[0...2]`
  ).catch(() => []);
  return (
    <>
      <section className="hero-editorial">
        <div className="hero-copy">
          <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-current" /> A little more you</p>
          <h1>Good style.<br /><span>Great everyday.</span></h1>
          <p className="hero-description">Meet your next everyday favorites. Easy layers, thoughtful details, and pieces that feel as good as they look.</p>
          <a href="#collection" className="shop-link">Find your favorites <ArrowUpRight className="size-4" /></a>
          <div className="mt-10 flex items-center gap-3 text-xs text-[#62746a]"><ArrowDown className="size-4" /> A fresh perspective on everyday dressing</div>
        </div>
        <div className="hero-gallery">
          <span className="hero-gallery-label">THE EVERYDAY COLLECTION</span>
          {products.length ? products.map((product, index) => (
            <Link key={product._id} href={`/products/${product.slug?.current}`} className={`hero-product hero-product-${index}`}>
              <Image src={urlFor(product.images![0]).width(720).url()} alt={product.name || "Featured product"} fill sizes="(max-width: 767px) 45vw, 25vw" priority className="object-cover transition duration-700 hover:scale-105" />
              <span className="hero-product-caption"><span className="truncate">{product.name}</span><ArrowUpRight className="size-4 shrink-0" /></span>
            </Link>
          )) : <div className="hero-fallback"><span>Less ordinary.</span><span>More you.</span></div>}
          <span className="hero-gallery-note">Wear it your way.</span>
        </div>
      </section>
      <div className="collection-strip"><span>Everyday essentials</span><span>Considered details</span><span>Endless possibilities</span></div>
    </>
  );
}

export default HomeBanner;
