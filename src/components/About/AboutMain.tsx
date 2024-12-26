"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "@/components/Container";

const AboutMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
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
      <section className="bg-slate-300 text-white about-main-section">
        <Container>
          <div
            className="text-center py-[200px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="h3 md:h1 lg:text-[52px] mb-4 text-white">
              Empowering Your Tech Business
            </h2>
            <h6 className="h6">
              Discover Innovative Solutions in Laptops, Computers, and Tech
              Accessories for Every Need
            </h6>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutMain;
