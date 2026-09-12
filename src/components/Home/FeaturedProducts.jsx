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
    </Container>
  );
};

export default FeaturedProducts;
