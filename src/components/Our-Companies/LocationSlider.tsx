"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import company1 from "../../../public/assets/company1.jpeg";
import company2 from "../../../public/assets/company2.jpeg";
import company3 from "../../../public/assets/company3.jpeg";
import company5 from "../../../public/assets/company5.jpeg";
import company6 from "../../../public/assets/company6.jpeg";

const images = [
  { src: company1, alt: "Almtraders" },
  { src: company2, alt: "Almtraders" },
  { src: company3, alt: "Almtraders" },
  { src: company5, alt: "Almtraders" },
  { src: company6, alt: "Almtraders" },
];

const LocationSlider = () => {
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

export default LocationSlider;
