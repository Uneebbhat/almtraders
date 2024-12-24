import React from "react";
import Container from "@/components/Container";

const Videos = () => {
  return (
    <>
      <section className="py-[40px] bg-lightGray">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-[20px]">
            <div>
              <video
                src="/assets/video1.mov"
                controls
                // className="w-full h-[800px]"
              ></video>
            </div>
            <div>
              <video
                src="/assets/video2.mov"
                controls
                // className="w-full h-[800px]"
              ></video>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Videos;
