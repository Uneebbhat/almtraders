import React from "react";
import Container from "@/components/Container";

const NeedAssistance = () => {
  return (
    <>
      <section className="py-[40px] bg-lightGray text-center">
        <Container>
          <div className="flex flex-col gap-[40px]">
            <div>
              <h2 className="h2 text-black">Need assistance?</h2>
            </div>
            <div>
              <p className="mb-4">
                Feel free to reach out to us via WhatsApp for any queries about
                our
                <br />
                products or services. We're here to help!
              </p>
              <button className="button-dark">Chat with Us on WhatsApp</button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NeedAssistance;
