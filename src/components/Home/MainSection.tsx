"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "@/components/Container";
import Slider from "@/components/Home/Slider";

const MainSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <main className="main-section relative z-20 py-[50px] md:py-[100px] bg-black">
        <Container>
          <div className="flex flex-col items-center text-center gap-[20px]">
            <h1
              className="h3 md:h1 lg:text-[52px] text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Wholesalers, Retailers, Corporate, and Exporters
            </h1>

            <Slider data-aos="fade-up" data-aos-delay="500" />
            <p
              className="h5 text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover a Wide Range of Laptops, Computers, Accessories, and Tech
              Components
            </p>
            <button
              className="button-light body-medium"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Explore products
            </button>
          </div>
        </Container>
      </main>
    </>
  );
};

export default MainSection;
