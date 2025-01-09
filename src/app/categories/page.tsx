import Container from "@/components/Container";
import React from "react";

const page = () => {
  return (
    <>
      <section className="py-[60px] bg-black text-white min-h-[80vh] flex items-center justify-center">
        <Container>
          <div>
            <h1 className="text-[60px] md:text-[80px] font-bold text-center">
              Coming Soon
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
