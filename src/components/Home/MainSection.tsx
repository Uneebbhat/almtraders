import React from "react";
import Container from "@/components/Container";
import Slider from "@/components/Home/Slider";

const MainSection = () => {
  return (
    <>
      <div className="absolute min-h-screen w-full bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <main className="main-section relative z-20 py-[50px] md:py-[100px]">
        <Container>
          <div className="flex flex-col items-center text-center gap-[20px]">
            <h1 className="h3 md:h1 lg:text-[52px] text-black">
              Discover <span className="text-red underline">Top-Quality</span>{" "}
              Laptops <br /> & Accessories
            </h1>
            <Slider />
            <p className="h5 text-black">
              Browse through our premium collection.
            </p>
            <button className="button-dark body-medium">
              Explore products
            </button>
          </div>
        </Container>
      </main>
    </>
  );
};

export default MainSection;
