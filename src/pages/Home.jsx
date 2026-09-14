import React from "react";
import Hero from "../components/Home/Hero";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import ShopByBrands from "../components/Home/ShopByBrands";

const Home = () => {
  return (
    <div>
      <Hero />

      <FeaturedProducts />

      <ShopByBrands />

      <BestSellerProducts />
    </div>
  );
};

export default Home;
