"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

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

interface AOSInterface {
  "data-aos": string;
  "data-aos-delay": string;
}

const SliderTwo = ({
  "data-aos": dataAos,
  "data-aos-delay": dataAosDelay,
}: AOSInterface) => {
  return (
    <div
      className="slider-container"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        className="custom-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[350px] md:h-[300px]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                className="rounded-xl shadow-lg object-auto w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTwo;
