'use client'
import useCartStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartItem() {
  const {items} = useCartStore();
  return (
    <Link href={"/cart"} aria-label={`Shopping bag with ${items.length} items`} className="icon-button relative group">
      <ShoppingBag className="size-4.5" />
      <div className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-amber-600 ring-2 ring-[#f7f5f1]">
        <span
          className="text-[9px] font-bold text-white"
        >
         {items.length ? items.length : 0}
        </span>
      </div>
    </Link>
  );
}

export default CartItem;
