import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

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
                products or services. We&apos;re here to help!
              </p>
              <Link
                href="https://wa.me/+447300019359"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <button className="button-dark">
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
