import Image from "next/image";
import React from "react";
import whatsapp from "../../public/assets/whatsapp.png";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+447300019359"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center justify-center bg-white text-white rounded-full p-2 shadow-lg transition-all"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src={whatsapp} alt="Whatsapp" width={40} height={40} />
    </Link>
  );
};

export default WhatsAppButton;
