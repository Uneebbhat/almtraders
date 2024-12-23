"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";

import slider1 from "@/assets/slider1.png";
import slider2 from "@/assets/slider2.png";
import slider3 from "@/assets/slider3.png";
import slider4 from "@/assets/slider4.png";
import slider5 from "@/assets/slider5.png";

const images = [
  { src: slider1, alt: "Almtraders" },
  { src: slider2, alt: "Almtraders" },
  { src: slider3, alt: "Almtraders" },
  { src: slider4, alt: "Almtraders" },
  { src: slider5, alt: "Almtraders" },
];

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="swiper-button-prev absolute top-1/2 font-bold text-center left-0 transform -translate-y-1/2 bg-white w-[30px] h-[30px] rounded-full shadow-md z-10 cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &lt;
      </div>
      <div
        className="swiper-button-next absolute top-1/2 font-bold text-center right-0 transform -translate-y-1/2 bg-white w-[30px] h-[30px] rounded-full shadow-md z-10 cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &gt;
      </div>
    </div>
  );
};

export default Page;
