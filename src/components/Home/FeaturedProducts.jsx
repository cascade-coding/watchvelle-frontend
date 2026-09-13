import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import ProductCard from "../shared/ProductCard";
import { useConstants } from "../../store/useConstants";

const FeaturedProducts = () => {
  const getDemoProductCards = useConstants(
    (state) => state.getDemoProductCards,
  );

  const cards = getDemoProductCards();

  return (
    <Container className="pt-16 md:pt-20 pb-[400px]">
      <SectionHeading
        title="FEATURED"
        coloredTitle="WATCHES"
        subtitle="Discover watches selected for every style and occasion."
      />

      {/* Product cards wrapper */}

      <div className="no-scrollbar pt-10 w-full flex gap-x-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-y-9 lg:overflow-visible">
        {/* Product cards */}

        {cards.map(({ id, ...product }) => (
          <ProductCard
            key={id}
            className="min-w-[85%] sm:min-w-[45%] md:min-w-[32%] snap-start lg:min-w-0"
            {...product}
          />
        ))}

        {/* Product cards */}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
