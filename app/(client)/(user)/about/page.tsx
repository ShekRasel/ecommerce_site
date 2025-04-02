import Container from "@/components/Container";
import React from "react";

const About = () => {
  return (
    <Container>

<div className="p-6 font-sans font-medium">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 ">About Synzo</h1>
      <p className="text-gray-700 text-md  mx-auto mb-4">
        Synzo is a leading e-commerce platform designed to provide a seamless shopping experience. We offer a diverse range of high-quality products at competitive prices, ensuring that our customers always get the best value.
      </p>
      <p className="text-gray-700 text-md  mx-auto mb-4">
        Our goal is to revolutionize online shopping with an intuitive interface and a secure transaction process. At Synzo, customer satisfaction is our top priority, and we strive to meet and exceed expectations with every purchase.
      </p>
      <p className="text-gray-700 text-md  mx-auto">
        We are constantly innovating and expanding our catalog to bring the latest and most in-demand products to our customers. Join us on this journey and experience the future of e-commerce with Synzo.
      </p>
    </div>
    </Container>
  );
};

export default About;
