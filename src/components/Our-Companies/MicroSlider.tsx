"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import lahore1 from "../../../public/assets/micro1.jpeg";
import lahore2 from "../../../public/assets/micro2.jpeg";
import lahore3 from "../../../public/assets/micro3.jpeg";

const images = [
  { src: lahore1, alt: "Almtraders" },
  { src: lahore2, alt: "Almtraders" },
  { src: lahore1, alt: "Almtraders" },
  { src: lahore3, alt: "Almtraders" },
];

const MicroSlider = () => {
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

export default MicroSlider;
