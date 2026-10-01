'use client'
import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import QuantityButton from "./QuantityButton";
import FormatedPrice from "./FormatedPrice";
import useCartStore from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

function AddtoCardButton({ product }: Props) {
  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutStock = product?.stock === 0;

  return (
    <div className="w-full">
      {itemCount ? (
        <div className="text-sm">
          <div className="flex justify-between items-center">
            <h1>Quantity</h1>
            <QuantityButton product={product}/>
          </div>

          <div className="flex justify-between mt-3 pt-2 border-t">
            <h1>Subtotal</h1>
            <FormatedPrice
              amount={product?.price ? product?.price * itemCount : 0}
              className=""
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            addItem(product);
            toast.success(
              `${product?.name?.substring(0, 12)}... added successfully!`
            );
          }}
          disabled={isOutStock}
          className={cn(
            "h-11 w-full cursor-pointer rounded-full border border-neutral-950 bg-neutral-950 text-white shadow-none transition hover:bg-amber-700 hover:text-white"
          )}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default AddtoCardButton;
