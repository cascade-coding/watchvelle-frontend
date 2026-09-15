import React from "react";
import Hero from "../components/Home/Hero";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import ShopByBrands from "../components/Home/ShopByBrands";
import WhyUs from "../components/Home/WhyUs";
import CustomerReviews from "../components/shared/CustomerReviews";

const Home = () => {
  return (
    <div>
      <Hero />

      <FeaturedProducts />

      <ShopByBrands />

      <BestSellerProducts />

      <WhyUs />

      <CustomerReviews />

      <div className="py-80 bg-amber-200"></div>
    </div>
  );
};

export default Home;
