"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set initial screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // 768px is typically considered mobile screen size
    };

    // Check screen size on component mount
    checkScreenSize();

    // Add resize event listener to handle screen size change
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener when the component unmounts
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
            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 md:gap-16">
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
                  At ALM Traders, we live and breathe gaming. Our passion for
                  cutting-edge technology and the gaming experience drives us to
                  create the most powerful, customizable, and reliable gaming
                  computers on the market. Whether you’re a casual gamer, a
                  competitive eSports player, or a professional streamer, we
                  have the perfect rig to elevate your game.
                </p>
                <br />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Our Story
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-white">
                  ALM Traders began as a small team of dedicated gamers and tech
                  enthusiasts with a shared dream: to build the best gaming
                  systems available. Frustrated with the limitations of
                  mass-produced PCs, we set out to design and build custom
                  gaming computers that offer unrivaled performance, stunning
                  aesthetics, and exceptional value.
                </p>
                <button className="mt-6 button-light">
                  Learn more about us
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
