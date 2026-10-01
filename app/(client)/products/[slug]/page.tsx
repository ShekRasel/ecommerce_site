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


  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col gap-10 py-8 sm:py-12 md:flex-row lg:gap-16">
      {product?.images && <ImageView images={product.images} />}

      <div className="w-full py-2 md:w-1/2 lg:py-8">
        <p className="eyebrow mb-3">{product.variants || "The Shynzo edit"}</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-5xl">{product.name}</h1>
        {/* product price*/}
        <div className="mt-5 text-xl">
          <PriceView price={product.price} discount={product.discount} />
        </div>
        <div className="mt-3">
          {product.stock !== 0 && (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 before:size-1.5 before:rounded-full before:bg-emerald-500">
              In stock
            </span>
          )}
        </div>
        <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">{product.description}</p>
        <div className="mt-7 flex gap-3">
          <AddtoCardButton product={product} />
          <button aria-label="Add to favorites" className="icon-button size-11 shrink-0">
            <Heart />
          </button>
        </div>
        <ProductCharacteristics product={product} />

        <div className="mt-6 grid grid-cols-2 gap-4 border-y border-black/10 py-6 text-sm text-neutral-600 md:grid-cols-3">
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

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white px-5 py-4">
            <h3 className="font-semibold">Free shipping</h3>
            <p className="mt-1 text-sm text-neutral-500">On orders over BDT 120</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-5 py-4">
            <h3 className="font-semibold">Flexible payment</h3>
            <p className="mt-1 text-sm text-neutral-500">Multiple secure payment options</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default singleProduct;
