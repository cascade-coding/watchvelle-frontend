import React from "react";
import ProductImageGallery from "./ProductImageGallery";
import { useConstants } from "../../store/useConstants";
import Container from "../shared/Container";

const ProductOverview = () => {
  const product = useConstants((state) => state.DEMO_SINGLE_PRODUCT);

  return (
    <div className="bg-white">
      <Container className="pt-5 md:pt-4 pb-7">
        <div className="flex flex-col gap-8 sm:flex-row lg:gap-10 xl:gap-14">
          {/* Image gallery */}
          <div className="w-full max-w-[380px] lg:max-w-[420px] lg:w-1/2 lg:shrink-0">
            <ProductImageGallery images={product.images} />
          </div>

          {/* Product info */}
          <div className="w-full lg:flex-1 min-w-0">
            <p className="font-semibold text-sm tracking-[1.44px] uppercase text-gold">
              {product.brand}
            </p>
            <p className="font-brand font-bold text-lg md:text-[28px] uppercase leading-snug text-brand pt-1.5">
              {product.info.title}
            </p>
            <p>{product.info.retail}</p>
            <p>{product.info.price}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductOverview;
