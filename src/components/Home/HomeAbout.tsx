"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
      <section className="py-10 md:py-16 bg-black">
        <Container>
          <div>
            <h2
              className="text-center text-2xl md:text-3xl font-bold text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-4 md:gap-16">
              <video
                src="/assets/video3.mp4"
                loop
                controls
                autoPlay
                style={{ height: "700px" }}
                data-aos={isSmallScreen ? "fade-up" : "fade-right"}
                data-aos-delay="300"
              ></video>
              <div
                className="flex flex-col justify-center"
                data-aos={isSmallScreen ? "fade-up" : "fade-left"}
                data-aos-delay="300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  About AlmTraders
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-white">
                  At ALM Traders, we specialize in wholesale import and export
                  of IT products. Our dedication to sourcing high-quality
                  products and ensuring seamless logistics allows us to meet the
                  diverse needs of businesses worldwide.
                </p>
                <br />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Our Story
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-white">
                  ALM Traders started as a small team of entrepreneurs
                  passionate about global trade and building strong partnerships
                  In the sector of IT business Driven by the vision to Provide
                  market with the high end possible IT Products, Known for our
                  wholesale network and Commitments. We are Still in IT business
                  from last 30 years, making us unique and one of the most
                  trustable Company across the Globe.
                </p>

                <div className="text-white mt-4">
                  <h5 className="h5">What We Do?</h5>
                  <ul className="ml-4">
                    <li>1. We buy in wholesale Bulk Quantity</li>
                    <li>2. We sell in Wholesale Bulk Quantity</li>
                    <li>3. We Export Via Shipping</li>
                    <li>4. We Export Via air cargo </li>
                  </ul>
                </div>

                <Link href="/about">
                  <button className="mt-6 button-light w-full">
                    Learn more about us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
