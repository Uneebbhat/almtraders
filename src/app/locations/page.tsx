import Container from "@/components/Container";
import OurLocaions from "@/components/Locations/OurLocaions";
import React from "react";

const page = () => {
  return (
    <>
      <section className="py-[60px] bg-black text-white">
        <Container>
          <div>
            <h2 className="h2 text-center">Discover ALM Across the Globe</h2>
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
