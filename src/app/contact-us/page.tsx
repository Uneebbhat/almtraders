import ContactUsers from "../../components/ContactUs/ContactUsers";
import Container from "@/components/Container";
import React from "react";

const page = () => {
  return (
    <>
      <section className="py-[60px] bg-black text-white">
        <Container>
          <div>
            <h2 className="h2 text-center">Contact us</h2>
            <div>
              <ContactUsers />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
