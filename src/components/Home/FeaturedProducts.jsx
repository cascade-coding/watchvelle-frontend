import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import ProductCard from "../shared/ProductCard";

const FeaturedProducts = () => {
  return (
    <Container className="pt-16 md:pt-20 pb-[400px]">
      <SectionHeading
        title="FEATURED"
        coloredTitle="WATCHES"
        subtitle="Discover watches selected for every style and occasion."
      />

      {/* Product cards wrapper */}
      <div className="pt-10 w-full grid grid-cols-1 min-[475px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-9">
        {/* Product card */}

        <ProductCard
          to="/watches/speedmaster-chronograph"
          brand="Omega"
          title="Speedmaster Chronograph Hand Wind Silver Dial Men's Watch"
          price="$16,320.00"
          originalPrice="$20,800.00"
          primaryImage="/images/product-speedmaster-1.png"
          secondaryImage="/images/product-speedmaster-2.png"
        />

        <ProductCard
          to="/watches/speedmaster-chronograph"
          brand="Omega"
          title="Speedmaster Chronograph Hand Wind Silver Dial Men's Watch"
          price="$16,320.00"
          originalPrice="$20,800.00"
          primaryImage="/images/product-speedmaster-1.png"
          secondaryImage="/images/product-speedmaster-2.png"
        />

        <ProductCard
          to="/watches/speedmaster-chronograph"
          brand="Omega"
          title="Speedmaster Chronograph Hand Wind Silver Dial Men's Watch"
          price="$16,320.00"
          originalPrice="$20,800.00"
          primaryImage="/images/product-speedmaster-1.png"
          secondaryImage="/images/product-speedmaster-2.png"
        />

        <ProductCard
          to="/watches/speedmaster-chronograph"
          brand="Omega"
          title="Speedmaster Chronograph Hand Wind Silver Dial Men's Watch"
          price="$16,320.00"
          originalPrice="$20,800.00"
          primaryImage="/images/product-speedmaster-1.png"
          secondaryImage="/images/product-speedmaster-2.png"
        />

        <ProductCard
          to="/watches/speedmaster-chronograph"
          brand="Omega"
          title="Speedmaster Chronograph Hand Wind Silver Dial Men's Watch"
          price="$16,320.00"
          originalPrice="$20,800.00"
          primaryImage="/images/product-speedmaster-1.png"
          secondaryImage="/images/product-speedmaster-2.png"
        />

        <ProductCard
          to="/watches/speedmaster-chronograph"
          brand="Omega"
          title="Speedmaster Chronograph Hand Wind Silver Dial Men's Watch"
          price="$16,320.00"
          originalPrice="$20,800.00"
          primaryImage="/images/product-speedmaster-1.png"
          secondaryImage="/images/product-speedmaster-2.png"
        />

        {/* Product card */}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
