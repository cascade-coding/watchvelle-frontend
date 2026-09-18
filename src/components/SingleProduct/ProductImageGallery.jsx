import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Next from "../icons/Next";
import Previous from "../icons/Previous";

const ProductImageGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  return (
    <div className="w-full">
      {/* Main image slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full aspect-square rounded-lg overflow-hidden"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 border border-border rounded-md md:rounded-[14px]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail strip with arrows */}
      <div className="mt-4 flex items-center gap-3">
        {/* Prev button */}
        <button
          onClick={() => thumbsSwiperRef.current?.slidePrev()}
          className="shrink-0 w-8 h-8 flex items-center justify-center hover:cursor-pointer"
          aria-label="Previous image"
        >
          <Previous />
        </button>

        {/* Thumbs slider */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            thumbsSwiperRef.current = swiper;
          }}
          watchSlidesProgress
          spaceBetween={8}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 12 },
          }}
          className="flex-1"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="cursor-pointer aspect-square overflow-hidden rounded-md md:rounded-[14px] border border-border p-2 lg:p-1 in-[.swiper-slide-thumb-active]:border-gold">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next button */}
        <button
          onClick={() => thumbsSwiperRef.current?.slideNext()}
          className="shrink-0 w-8 h-8 flex items-center justify-center hover:cursor-pointer"
          aria-label="Next image"
        >
          <Next />
        </button>
      </div>
    </div>
  );
};

export default ProductImageGallery;
