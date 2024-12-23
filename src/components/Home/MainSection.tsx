import React from "react";
import Container from "@/components/Container";

const MainSection = () => {
  return (
    <main className="main-section py-[220px]">
      <Container>
        <div className="flex flex-col items-center text-center gap-[20px]">
          <h1 className="h3 md:h1 lg:text-[62px] text-white">
            Discover <span className="text-red underline">Top-Quality</span>{" "}
            Laptops <br /> & Accessories
          </h1>
          <p className="h5 text-white">
            Browse through our premium collection.
          </p>
          <button className="button-light body-medium">Explore products</button>
        </div>
      </Container>
    </main>
  );
};

export default MainSection;
