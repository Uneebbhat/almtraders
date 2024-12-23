import Image from "next/image";
import React from "react";
import whatsapp from "@/assets/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/<YOUR_PHONE_NUMBER>"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center bg-white text-white rounded-full p-2 shadow-lg transition-all"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src={whatsapp} alt="Whatsapp" width={40} height={40} />
    </a>
  );
};

export default WhatsAppButton;
