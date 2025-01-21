"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "@/components/Container";

const OurHistory = () => {
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
      <section className="py-[40px] bg-black text-white">
        <Container>
          {/* Wholesale Buying and Selling Section */}
          <div
            className="flex flex-col md:flex-row items-center gap-4 md:gap-16 about-flex mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about-data w-full">
              <h2 className="h2">Leading Wholesale Innovators</h2>
              <p>
                With over{" "}
                <span className="font-bold">
                  30 years of industry experience
                </span>
                , ALM Traders has become one of Pakistan’s most trusted and
                prominent wholesale distributors. Our focus on providing
                high-quality tech products in bulk to businesses across the
                globe has made us a key player in the tech wholesale market.
                From cutting-edge laptops and computing devices to essential
                tech accessories, we work with top manufacturers worldwide to
                bring exceptional products at competitive prices.
              </p>
              <br />
              {/* <p>
                As a proud subsidiary of{" "}
                <span className="font-bold">ALM Micros</span> in the UK and{" "}
                <span className="font-bold">
                  Golden Gulf line Elect.Devices TR LLC
                </span>{" "}
                in the UAE, ALM Traders is part of a vast network of tech
                leaders. Our strong relationships with suppliers and clients
                enable us to offer reliable, scalable, and cost-effective
                solutions to businesses everywhere.
              </p> */}
            </div>
            <div className="about-section-whole-selling w-1/4"></div>
          </div>

          {/* Our History Section */}
          <div
            className="flex flex-col md:flex-row items-center gap-4 md:gap-16 about-flex mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about-section-img w-1/4"></div>
            <div className="about-data w-full">
              <h2 className="h2">Our Journey as Wholesale Leaders</h2>
              <p>
                Founded in 1998, ALM Traders has grown from a small tech
                distributor into one of the largest wholesale suppliers in the
                industry. Our journey began by distributing early computing
                devices like the Pentium series and storage devices, and over
                time, we&apos;ve expanded our portfolio to include the latest
                laptops, computers, and tech accessories. Our commitment to
                wholesale excellence has solidified our reputation as a global
                leader in tech distribution.
              </p>
              <br />
              <p>
                Today, we serve businesses across various sectors, providing
                bulk supplies and tailored tech solutions. As a subsidiary of{" "}
                <span className="font-bold">ALM Micros</span> in the UK and{" "}
                <span className="font-bold">
                  Golden Gulf line Elect.Devices TR LLC
                </span>{" "}
                in the UAE, we are proud to be part of a powerful international
                network focused on technology innovation.
              </p>
            </div>
          </div>

          {/* Corporate Services Section */}
          <div
            className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-16 about-flex mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about-data w-full">
              <h2 className="h2">
                Empowering Businesses with Wholesale Solutions
              </h2>
              <p>
                With a portfolio of over{" "}
                <span className="font-bold">200 corporate clients</span>, ALM
                Traders is deeply committed to supporting businesses in their
                technology needs. We offer tailored wholesale rates, bulk supply
                options, and exceptional after-sales services. Our team is
                dedicated to ensuring seamless deliveries and comprehensive
                support, including{" "}
                <span className="font-bold">doorstep delivery</span>, to help
                businesses thrive.
              </p>
            </div>
            <div className="about-section-corperate w-1/4"></div>
          </div>
          <div
            className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-16 about-flex mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about-section-retail w-1/4"></div>
            <div className="about-data w-full">
              <h2 className="h2">Retail for Broader Reach</h2>
              <p>
                While our primary focus remains wholesale, ALM Traders entered
                the retail sector in <span className="font-bold">2017</span> to
                cater to individual customers and enhance brand visibility.
                Today, we continue to offer competitive retail products, but our
                core strength lies in meeting the bulk and wholesale demands of
                businesses across the globe.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center gap-4 md:gap-16 about-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about-data w-full">
              <h2 className="h2">Shaping the Future of Tech Wholesale</h2>
              <p>
                At ALM Traders, we believe that the future of technology lies in
                expanding access to quality tech products through innovative
                wholesale solutions. We are committed to driving progress by
                providing businesses with the best tech products at competitive
                prices, helping them stay ahead in a fast-evolving digital
                world.
              </p>
            </div>
            <div className="about-section-future-tech w-1/4"></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurHistory;
