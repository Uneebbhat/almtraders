import Container from "@/components/Container";
import OurLocaions from "@/components/Our-Companies/OurLocaions";
import React from "react";

const page = () => {
  return (
    <>
      <section className="py-[60px] bg-black text-white">
        <div className="relative">
          <div className="our-company-img w-full h-[400px]"></div>
          <h2 className="h2 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            Discover ALM Across the Globe
          </h2>
        </div>
        <Container>
          <div>
            <div>
              <OurLocaions />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
