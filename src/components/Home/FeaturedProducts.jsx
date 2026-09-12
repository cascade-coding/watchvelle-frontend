import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";

const FeaturedProducts = () => {
  return (
    <Container className="pt-16 md:pt-20 pb-[400px]">
      <SectionHeading
        title="FEATURED"
        coloredTitle="WATCHES"
        subtitle="Discover watches selected for every style and occasion."
      />

      {/* Product cards wrapper */}
      <div className="w-full flex flex-wrap justify-between gap-y-9">
        {/* Product card */}

        <div className="w-full max-w-80">
          <div className="relative group ">
            {/* Primary image — visible by default, hidden on hover */}
            <img
              src="/images/product-speedmaster-1.png"
              alt="watch"
              className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Secondary image — hidden by default, visible on hover */}
            <img
              src="/images/product-speedmaster-2.png"
              alt="watch"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          <div>
            <p>Omega</p>
            <p>Speedmaster Chronograph Hand Wind Silver Dial Men's Watch</p>
            <div>
              <p>$16,320.00</p>
              <p>$20,800.00</p>
            </div>
          </div>
        </div>

        {/* Product card */}
       
      </div>
    </Container>
  );
};

export default FeaturedProducts;
