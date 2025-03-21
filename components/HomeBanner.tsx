import React from "react";
import Title from "./Title";

function HomeBanner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title className="text-3xl text-center md:text-4xl uppercase font-bold">
        Best clothing collection
      </Title>
      <p className="text-lightColor text-sm text-center mt-4 max-w-[480px]">
      Find everything you need to look and feel your best, and shop the latest men fashion and lifestyle products.
      </p>
    </div>
  );
}

export default HomeBanner;
