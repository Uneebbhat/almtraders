"use client";
import Container from "@/components/Container";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const NeedAssistance = () => {
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
      <section className="py-[40px] bg-black text-center">
        <Container>
          <div className="flex flex-col gap-[20px] md:gap-[40px]">
            <div>
              <h2
                className="h3 md:h2 text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Need assistance?
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="mb-4 text-white body-large">
                Feel free to reach out to us via WhatsApp for any queries about
                our
                <br />
                products or services. We&apos;re here to help!
              </p>
              <Link
                href="https://wa.me/+447300019359"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <button className="button-light body-small md:body-medium">
                  Chat with Us on WhatsApp
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NeedAssistance;
