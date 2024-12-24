"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";

import slider1 from "../../../public/assets/slider1.jpeg";
import slider2 from "../../../public/assets/slider2.jpeg";
import slider3 from "../../../public/assets/slider3.jpeg";
import slider4 from "../../../public/assets/slider4.jpeg";
import slider5 from "../../../public/assets/slider5.jpeg";
import slider6 from "../../../public/assets/slider6.jpeg";
import slider7 from "../../../public/assets/slider7.jpeg";
import slider8 from "../../../public/assets/slider8.jpeg";
import slider9 from "../../../public/assets/slider9.jpeg";
import slider10 from "../../../public/assets/slider10.jpeg";
import slider11 from "../../../public/assets/slider11.jpeg";
import slider12 from "../../../public/assets/slider12.jpeg";
import slider13 from "../../../public/assets/slider13.jpeg";
import slider14 from "../../../public/assets/slider14.jpeg";
import slider15 from "../../../public/assets/slider15.jpeg";
import slider16 from "../../../public/assets/slider16.jpeg";
import slider17 from "../../../public/assets/slider17.jpeg";
import slider18 from "../../../public/assets/slider18.jpeg";
import slider19 from "../../../public/assets/slider19.jpeg";
import slider20 from "../../../public/assets/slider20.jpeg";
import slider21 from "../../../public/assets/slider21.jpeg";
import slider22 from "../../../public/assets/slider22.jpeg";
import slider23 from "../../../public/assets/slider23.jpeg";
import slider24 from "../../../public/assets/slider24.jpeg";
import slider25 from "../../../public/assets/slider25.jpeg";
import slider26 from "../../../public/assets/slider26.jpeg";
import slider27 from "../../../public/assets/slider27.jpeg";
import slider28 from "../../../public/assets/slider28.jpeg";
import slider29 from "../../../public/assets/slider29.jpeg";
import slider30 from "../../../public/assets/slider30.jpeg";
import slider31 from "../../../public/assets/slider31.jpeg";
import slider32 from "../../../public/assets/slider32.jpeg";
import slider33 from "../../../public/assets/slider33.jpeg";
import slider34 from "../../../public/assets/slider34.jpeg";
import slider35 from "../../../public/assets/slider35.jpeg";
import slider36 from "../../../public/assets/slider36.jpeg";
import slider37 from "../../../public/assets/slider37.jpeg";

const images = [
  { src: slider1, alt: "Almtraders" },
  { src: slider2, alt: "Almtraders" },
  { src: slider3, alt: "Almtraders" },
  { src: slider4, alt: "Almtraders" },
  { src: slider5, alt: "Almtraders" },
  { src: slider6, alt: "Almtraders" },
  { src: slider7, alt: "Almtraders" },
  { src: slider8, alt: "Almtraders" },
  { src: slider9, alt: "Almtraders" },
  { src: slider10, alt: "Almtraders" },
  { src: slider11, alt: "Almtraders" },
  { src: slider12, alt: "Almtraders" },
  { src: slider13, alt: "Almtraders" },
  { src: slider14, alt: "Almtraders" },
  { src: slider15, alt: "Almtraders" },
  { src: slider16, alt: "Almtraders" },
  { src: slider17, alt: "Almtraders" },
  { src: slider18, alt: "Almtraders" },
  { src: slider19, alt: "Almtraders" },
  { src: slider20, alt: "Almtraders" },
  { src: slider21, alt: "Almtraders" },
  { src: slider22, alt: "Almtraders" },
  { src: slider23, alt: "Almtraders" },
  { src: slider24, alt: "Almtraders" },
  { src: slider25, alt: "Almtraders" },
  { src: slider26, alt: "Almtraders" },
  { src: slider27, alt: "Almtraders" },
  { src: slider28, alt: "Almtraders" },
  { src: slider29, alt: "Almtraders" },
  { src: slider30, alt: "Almtraders" },
  { src: slider31, alt: "Almtraders" },
  { src: slider32, alt: "Almtraders" },
  { src: slider33, alt: "Almtraders" },
  { src: slider34, alt: "Almtraders" },
  { src: slider35, alt: "Almtraders" },
  { src: slider36, alt: "Almtraders" },
  { src: slider37, alt: "Almtraders" },
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
                style={{ aspectRatio: "1", objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="swiper-button-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      ></div>
      <div
        className="swiper-button-next "
        onClick={() => swiperRef.current?.slideNext()}
      ></div>
    </div>
  );
};

export default Page;
