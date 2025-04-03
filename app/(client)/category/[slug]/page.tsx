import CategoryProduct from "@/components/CategoryProduct";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getAllCategories } from "@/sanity/helpers/queries";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    console.log( await params)
    const {slug} = await params;
    const categories =  await getAllCategories();
    return (
    <Container className="py-10 font-sans">
      <Title>
        Product by Category <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
        </span>
      </Title>
      <CategoryProduct categories = {categories} slug= {slug}/>
    </Container>
  );
};

export default page;
