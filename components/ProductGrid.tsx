"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constant";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import NoProduct from "./NoProduct";
import { Loader2, Sparkles } from "lucide-react";
import { Product } from "@/sanity.types";

// type Product = {
//   _id: number;
//   name: string;
//   // Add any other properties as needed
// };

function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const query = `*[_type == 'product' && variants == $variant] | order(name asc)`;
    const param = { variant: selectedTab.toLocaleLowerCase() };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, param);
        setProduct(await response);
      } catch (error) {
        console.error('error feching with query',error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);
  return (
    <section id="collection" className="mt-16 flex scroll-mt-28 flex-col items-center pb-16 sm:mt-20">
      <div className="mb-8 flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="eyebrow mb-3 flex items-center gap-2"><Sparkles className="size-3.5" /> Discover your next favorite</p>
        <h2 className="collection-heading">Fresh finds. Timeless feel.</h2></div>
        <p className="max-w-xs text-sm leading-6 text-[#718077]">An easy refresh for your wardrobe.<br />Pick a mood. Make it yours.</p>
      </div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      {loading ? (
        <div className="surface mt-10 flex min-h-80 w-full flex-col items-center justify-center space-y-4 py-10 text-center">
          <div className="flex gap-2 text-sm font-semibold text-amber-700">
            <span>
              <Loader2 className="animate-spin"/>
            </span>
            <span>Curating products...</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="mt-10 grid w-full grid-cols-2 items-stretch gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {products?.map((product: Product) => (
              <div key={product?._id} className="">
                <ProductCard product={product} />
              </div>
            ))}
            </div>
          ) : (
            <NoProduct selectedTab= {selectedTab} className = {'mt-10'}/>
          )}
        </>
      )}
    </section>
  );
}

export default ProductGrid;
