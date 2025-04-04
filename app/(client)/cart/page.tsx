"use client";

import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import FormatedPrice from "@/components/FormatedPrice";
import Loading from "@/components/Loading";
import NoAccessToCart from "@/components/NoAccessToCart";
import QuantityButton from "@/components/QuantityButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth, } from "@clerk/nextjs";
import { Heart, ShoppingBagIcon, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const [isClient, setIsClient] = useState(true);
  const {
    deleteCartProduct,
    getTototalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
    getGroupItems,
  } = useCartStore();

  const { isSignedIn } = useAuth();

  // const user = useUser();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }

  const cartProducts = getGroupItems();

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successFully!");
  };

  const handleResetCart = ()=>{
    const conFirmed = window.confirm('Are you sure to reset your Cart')
    if(conFirmed){
      resetCart()
      toast.success('Reset successfully!')
    }
  }
  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container>
          {cartProducts?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingBagIcon />
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              </div>
              <div></div>

              <div className="grid lg:grid-cols-3 md:gap-8">
                {/* products */}
                <div className="lg:col-span-2 rounded-lg">
                  <div className="border bg-white rounded-md">
                    {cartProducts?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5 "
                        >
                          <div className="flex flex-1 items-center gap-2 h-36 md:h-44">
                            {product?.images && (
                              <Link
                                href={`/products/${product?.slug?.current}`}
                                className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group"
                              >
                                <Image
                                  src={urlFor(product?.images[0]).url()}
                                  alt="product image"
                                  width={500}
                                  height={500}
                                  loading="lazy"
                                  className=" w-32  md:w-40 md:h-40 object-cover group-hover:scale-105 hoverEffect"
                                />
                              </Link>
                            )}

                            <div className="h-full flex flex-1 items-start justify-between py-1 flex-col">
                              <div className=" space-y-1.5">
                                <h2 className="font-semibold line-clamp-1">
                                  {product?.name}
                                </h2>
                                <p className="text-sm text-lightColor font-medium">
                                  {product?.intro}
                                </p>
                                <p className="text-sm capitalize">
                                  Variant: <span>{product.variants}</span>
                                </p>
                                <p className="font-semibold">
                                  Status: <span>{product?.status}</span>
                                </p>
                              </div>
                              <div className="text-gray-500 flex items-center gap-2">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Heart className="w-4 h-4 md:w-5 md:h-5 hover:text-green-600 hoverEffect" />
                                      <TooltipContent className="font-bold">
                                        Add to Favorite
                                      </TooltipContent>
                                    </TooltipTrigger>
                                  </Tooltip>

                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Trash
                                        className="w-4 cursor-pointer h-4 md:w-5 md:h-5 hover:text-red-600 hoverEffect"
                                        onClick={() =>
                                          handleDeleteProduct(product?._id)
                                        }
                                      />
                                      <TooltipContent className="font-bold text-red-600">
                                        Delete product
                                      </TooltipContent>
                                    </TooltipTrigger>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                            <div className="flex flex-col  items-start justify-between h-36  md:h-44 p-0.5 md:p-1">
                              <FormatedPrice amount={(product?.price as number) * itemCount} className="font-bold text-lg"/>
                              <QuantityButton product={product}/>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <Button className="m-5 cursor-pointer font-semibold " variant='destructive' onClick={handleResetCart}>Reset Cart</Button>
                  </div>
                </div>

                {/* summary */}
                <div className="lg:col-span-1">
                  <div className="hidden md:block w-full bg-white p-6 rounded-lg border">
                    <h1 className="text-xl "> Order Summary</h1>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <FormatedPrice amount={getSubTotalPrice()} className=""/>
                      </div>
                      <div className="flex justify-between">
                        <span>DisCount</span>
                        <FormatedPrice amount={getSubTotalPrice()-getTototalPrice()} className=""/>
                      </div>

                      <Separator/>
                      <div className="flex justify-between">
                        <span>Total</span>
                        <FormatedPrice amount={getTototalPrice()} className="text-lg font-bold text-black"/>
                      </div>
                      

                      <Button className="w-full rounded-full font-semibold tracking-wide " size='lg'>Proceed to Checkout</Button>
                      <Link href={'/'} className="flex justify-center items-center py-2 border border-darkColor rounded-full hover:border-black hover:bg-[#595858] hoverEffect">
                      
                      <Image height={30} width={30} src='/Paypal_2014_logo.png' alt="paypal logo"/>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
