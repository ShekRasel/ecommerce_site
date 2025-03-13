import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartItem() {
  return (
    <Link href={"/cart"} className=" relative group hoverEffect  ">
      <ShoppingBag className="w-5 group-hover:text-black hoverEffect" />
      <div className="bg-black rounded-full flex items-center justify-center p-2 absolute w-2 h-2 -top-2.5 -right-2 ">
        <span
          className=" text-white
          "
        >
          0
        </span>
      </div>
    </Link>
  );
}

export default CartItem;
