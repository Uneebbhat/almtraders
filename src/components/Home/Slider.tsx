"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
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
];

const Slider = () => {
  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="500"
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

export default Slider;
