"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceView from "./PriceView";
import AddtoCardButton from "./AddtoCardButton";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const featchProduct = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == 'product' && name match $search] | order(name asc)`;
      const param = { search: `${search}*` };
      const reponse = await client.fetch(query, param);
      setProducts(reponse);
    } catch (error) {
      console.error("Error fatching product", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      featchProduct();
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [search, featchProduct]);
  return (
    <div className="font-sans">
      <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
        <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
          <Search className="w-5 font-sans hover:text-black cursor-pointer hoverEffect" />
        </DialogTrigger>
        <DialogContent className=" md:min-w-2xl lg:min-w-4xl font-sans min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle className="mt-1">Product SearchBar</DialogTitle>
            <form className=" relative font-sans">
              <Input
                placeholder="Search your product here"
                className="flex-1 focus-visible:ring-0 rounded-md py-5"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <X
                  onClick={() => setSearch("")}
                  className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect cursor-pointer"
                />
              )}

              <button
                type="submit"
                className=" absolute top-0 right-0 bg-gray-200 w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-black hover:text-white hoverEffect"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </DialogHeader>
          <div className="w-full h-full overflow-y-scroll border rounded-md">
            <div>
              {loading ? (
                <p className="flex items-center px-6 py-10 gap-1 font-semibold text-yellow-500">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Searching on progress...
                </p>
              ) : products.length ? (
                products?.map((product: Product) => (
                  <div
                    key={product?._id}
                    className="bg-white overflow-hidden border-b last:border-0"
                  >
                    <div className=" md:flex items-center p-1">
                      <Link
                        href={`/products/${product?.slug?.current}`}
                        className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 border  overflow-hidden group"
                        onClick={() => setShowSearch(false)}
                      >
                        {product?.images && (
                          <Image
                            width={200}
                            height={200}
                            alt="product image"
                            src={urlFor(product?.images[0]).url()}
                            className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                          />
                        )}
                      </Link>
                      <div className="px-4 py-2 flex-grow">
                        <Link
                          href={`/products/${product?.slug?.current}`}
                          onClick={() => setShowSearch(false)}
                        >
                          <h3 className="line-clamp-1 font-semibold">
                            {product.name}
                          </h3>
                          <h4 className="line-clamp-1 text-sm text-gray-400">
                            {product.intro}
                          </h4>
                        </Link>
                        <PriceView price={product?.price} discount={product?.discount}/>
                      </div>
                      <div className="">
                        <AddtoCardButton product={product}/>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 font-semibold tracking-wide">
                  {search ? (
                    <p>
                      Nothing match with the keyword{" "}
                      <span className="text-red-500">{search}</span> . Please
                      try something else
                    </p>
                  ) : (
                    <p className="text-green-600 flex text-center justify-center gap-2">
                      <Search />
                      Search and explore your products from Synzo
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchBar;
