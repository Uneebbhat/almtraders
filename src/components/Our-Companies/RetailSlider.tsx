"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import lahore1 from "../../../public/assets/retail1.jpeg";
import lahore2 from "../../../public/assets/retail2.jpeg";
import lahore3 from "../../../public/assets/retail3.jpeg";
import lahore4 from "../../../public/assets/retail4.jpeg";
import lahore5 from "../../../public/assets/retail5.jpeg";
import lahore6 from "../../../public/assets/retail6.jpeg";
import lahore7 from "../../../public/assets/retail7.jpeg";
import lahore8 from "../../../public/assets/retail8.jpeg";

const images = [
  { src: lahore1, alt: "Almtraders" },
  { src: lahore2, alt: "Almtraders" },
  { src: lahore3, alt: "Almtraders" },
  { src: lahore4, alt: "Almtraders" },
  { src: lahore5, alt: "Almtraders" },
  { src: lahore6, alt: "Almtraders" },
  { src: lahore7, alt: "Almtraders" },
  { src: lahore8, alt: "Almtraders" },
];

const RetailSlider = () => {
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
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RetailSlider;
