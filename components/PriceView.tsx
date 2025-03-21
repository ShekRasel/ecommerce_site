import React from "react";
import FormatedPrice from "./FormatedPrice";
interface Props {
  price: number | undefined;
  discount: number | undefined;
}
function PriceView({ price, discount }: Props) {
  return (
    <div className="flex gap-4 ">
      <FormatedPrice amount={price} className={'font-semibold'}/>
      {price && discount && (
        <FormatedPrice amount={price + (price * discount) / 100} className= {'text-gray-400 line-through'}/>
      )}
    </div>
  );
}

export default PriceView;
