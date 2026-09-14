import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ShopByBrands = () => {
  return (
    <div className="bg-linear-to-b from-[#1B1B1B] to-[#272727]">
      <Container className="pt-16 md:pt-20 pb-18">
        <SectionHeading
          title="SHOP BY"
          coloredTitle="BRANDS"
          subtitle="Explore timepieces from the world's finest watchmakers."
          titleClassName="text-white"
          subtitleClassName="text-white"
        />

        <div className="pt-12">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 20 },
              640: { slidesPerView: 2.1, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 50 },
              1440: { slidesPerView: 4.2, spaceBetween: 50 },
            }}
            className="text-white my-slider"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="p-10 bg-red-500">Slide {i + 1}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ShopByBrands;
