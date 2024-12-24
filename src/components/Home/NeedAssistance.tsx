import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

const NeedAssistance = () => {
  return (
    <>
      <section className="py-[40px] bg-lightGray text-center">
        <Container>
          <div className="flex flex-col gap-[20px] md:gap-[40px]">
            <div>
              <h2 className="h3 md:h2 text-black">Need assistance?</h2>
            </div>
            <div>
              <p className="mb-4 body-small md:body-medium">
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
                <button className="button-dark body-small md:body-medium">
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
