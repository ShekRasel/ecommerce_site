"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constant";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import NoProduct from "./NoProduct";
import { Loader2 } from "lucide-react";
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
    <div className="mt-10 flex flex-col items-center  pb-10">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 text-center bg-gray-100 rounded-lg w-full mt-10 space-y-4 min-h-80 text-xl font-semibold">
          <div className="flex gap-2 text-blue-600">
            <span>
              <Loader2 className="animate-spin"/>
            </span>
            <span >Product is loading</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full items-center justify-center mt-10 gap-5 md:gap-8">
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
    </div>
  );
}

export default ProductGrid;
