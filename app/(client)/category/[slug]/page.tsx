import CategoryProduct from "@/components/CategoryProduct";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getAllCategories } from "@/sanity/helpers/queries";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
   
    const {slug} = await params;
    const categories =  await getAllCategories();
    return (
    <Container className="py-10 sm:py-14">
      <p className="eyebrow mb-3">Browse the collection</p>
      <Title className="text-4xl sm:text-5xl">
        Shop by category
      </Title>
      <CategoryProduct categories = {categories} slug= {slug}/>
    </Container>
  );
};

export default page;
