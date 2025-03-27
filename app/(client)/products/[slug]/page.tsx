import AddtoCardButton from "@/components/AddtoCardButton";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/helpers/queries";
import { Heart, Share2, ShieldQuestionIcon, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

const singleProduct = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  console.log(product);

  if (!product) {
    return notFound();
  }
  return (
    <Container className="py-10 flex flex-col md:flex-row gap-10 ">
      {product?.images && <ImageView images={product.images} />}

      <div className=" w-full md:w-1/2 font-sans">
        <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>
        {/* product price*/}
        <div className="mt-3">
          <PriceView price={product.price} discount={product.discount} />
        </div>
        <div className="mt-3">
          {product.stock !== 0 && (
            <button className="px-4 py-2 bg-green-100 text-green-600 rounded-md font-semibold">
              In Stock
            </button>
          )}
        </div>
        <p className="text-lightColor mt-3 text-md">{product.description}</p>
        <div className="mt-7 flex gap-3">
          <AddtoCardButton product={product} />
          <div className="border border-gray-300 flex justify-center items-center p-1 px-4 rounded-md">
            <Heart />
          </div>
        </div>
        <ProductCharacteristics product={product} />

        <div className="grid grid-cols-2 border-t border-b py-8 md:grid-cols-3 gap-2 text-sm text-lighColor mt-3">
          <div className="flex gap-1.5 hover:text-red-400 items-center">
            <span></span>
            <h3>Compare color</h3>
          </div>
          <div className="flex gap-1.5 hover:text-red-400 items-center">
            <span><ShieldQuestionIcon/></span>
            <h3>Ask a question</h3>
          </div>
          <div className="flex gap-1.5 hover:text-red-400 items-center">
            <span><Truck/></span>
            <h3>Delivery & Return</h3>
          </div>
          <div className="flex gap-1.5 hover:text-red-400 items-center">
            <span><Share2/></span>
            <h3>Share</h3>
          </div>
        </div>

        <div className="mt-6">
          <div className="border-lighColor border rounded-md px-4 py-4  w-64 text-center">
            <h1 className="text-darkColor font-semibold">Fee Shipping</h1>
            <h2 className="text-lighColor text-sm">Free shipping over order BDT120</h2>
          </div>
          <div className="border-lighColor border rounded-md px-4 py-4 mt-7 w-64  text-center">
            <h1 className="text-darkColor font-semibold">Flexible Payment</h1>
            <h2 className="text-lighColor text-sm">Pay with Multiple Credit Cardts</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default singleProduct;
