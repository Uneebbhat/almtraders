import React from "react";
import Container from "../Container";

const OurHistory = () => {
  return (
    <>
      <section className="py-[40px] bg-black text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 about-flex mb-8">
            <div className="about-section-img w-1/4"></div>
            <div className="about-data w-full">
              <h2 className="h2">Our History</h2>
              <p>
                Founded in 1998, ALM Traders is one of Pakistan’s leading tech
                companies, renowned for importing and wholesaling high-quality
                tech products. Our journey began with the Pentium series and 1MB
                storage devices, evolving alongside the rapidly changing tech
                landscape. Today, ALM Traders is a respected and reputable name
                in the wholesale market, specializing in laptops, computers, and
                tech accessories.
              </p>
              <br />
              <p>
                As a subsidiary of <span className="font-bold">ALM Micros</span>
                —a tech giant established in{" "}
                <span className="font-bold">1995</span> in the UK—and{" "}
                <span className="font-bold">Golden Gulf Electronics</span> in
                the UAE since <span className="font-bold">2024</span>, ALM
                Traders is part of a global network delivering cutting-edge
                technology and unmatched service.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-16 about-flex mb-8">
            <div className="about-data w-full">
              <h2 className="h2">Wholesale Buying and Selling</h2>
              <p>
                With over{" "}
                <span className="font-bold">
                  30 years of combined experience
                </span>
                , ALM Traders is a trusted name in the global tech wholesale
                industry. Our extensive buying and selling operations span the
                globe, reflecting our passion for advancing the future of
                technology.
              </p>
            </div>
            <div className="about-section-whole-selling w-1/4"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 about-flex mb-8">
            <div className="about-section-retail w-1/4"></div>
            <div className="about-data w-full">
              <h2 className="h2">Retail Excellence</h2>
              <p>
                In <span className="font-bold">2017</span>, ALM Traders entered
                the retail market with a small team of five. Today, we have
                grown into a reputable organization with a team of over{" "}
                <span className="font-bold">40 skilled professionals</span>{" "}
                dedicated to providing exceptional customer service. Offering a
                <span className="font-bold">money-back warranty</span>—a rarity
                in the market—ALM Traders sets the standard for customer trust
                and satisfaction.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-16 about-flex mb-8">
            <div className="about-data w-full">
              <h2 className="h2">Corporate Services</h2>
              <p>
                ALM Traders proudly serves the corporate sector, boasting a
                portfolio of over{" "}
                <span className="font-bold">200 corporate clients</span>. We
                provide competitive wholesale rates and unparalleled after-sales
                services, including{" "}
                <span className="font-bold">doorstep delivery</span>. Our
                commitment to excellence ensures that businesses receive the
                best products and support in the industry.
              </p>
            </div>
            <div className="about-section-corperate w-1/4"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 about-flex">
            <div className="about-section-future-tech w-1/4"></div>
            <div className="about-data w-full">
              <h2 className="h2">Driving the Future of Technology</h2>
              <p>
                At ALM Traders, we are passionate about technology and driven by
                the goal of empowering individuals and businesses with
                innovative solutions. Join us in shaping the future of tech!
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurHistory;
