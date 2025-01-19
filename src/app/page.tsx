"use client";
import Container from "@/components/Container";
import HomeAbout from "@/components/Home/HomeAbout";
import MainSection from "@/components/Home/MainSection";
import NeedAssistance from "@/components/Home/NeedAssistance";
import SliderTwo from "@/components/Home/SliderTwo";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CompanyLogoSlider from "@/components/Home/CompanyLogoSlider";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });

    window.addEventListener("scroll", () => AOS.refresh());

    return () => {
      window.removeEventListener("scroll", () => AOS.refresh());
    };
  }, []);

  return (
    <>
      <MainSection />
      <HomeAbout />
      <div className="py-[40px] bg-black text-white">
        <Container>
          <h3
            className="h3 md:h2 text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Featured Products
          </h3>
          <SliderTwo data-aos="fade-up" data-aos-delay="500" />
        </Container>
      </div>
      <CompanyLogoSlider />
      <NeedAssistance />
    </>
  );
}
