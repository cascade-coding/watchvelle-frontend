import React from "react";
import Hero from "../components/Home/Hero";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import BestSellerProducts from "../components/Home/BestSellerProducts";

const Home = () => {
  return (
    <div>
      <Hero />

      <FeaturedProducts />

      <BestSellerProducts />
    </div>
  );
};

export default Home;
