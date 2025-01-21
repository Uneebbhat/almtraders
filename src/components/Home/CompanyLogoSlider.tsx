import Image from "next/image";
import React from "react";

const logos = [
  { name: "HP", image: "/assets/hp.png" },
  { name: "DELL", image: "/assets/dell.png" },
  { name: "LENOVO", image: "/assets/lenovo.png" },
  { name: "APPLE", image: "/assets/apple.png" },
  { name: "ASUS", image: "/assets/asus.png" },
  { name: "GIGABYTE", image: "/assets/gigabyte.png" },
  { name: "FUJITSU", image: "/assets/fujitsu.png" },
  { name: "PANASONIC", image: "/assets/panasonic.png" },
  { name: "ACER", image: "/assets/acer.png" },
];

const CompanyLogoSlider = () => {
  return (
    <div className="py-16 bg-black">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8">
              <div className="bg-gray-100 opacity-90 rounded-lg p-8 flex items-center justify-center h-32 w-52">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="w-40 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={`clone-${index}`} className="mx-8">
              <div className="bg-gray-100 opacity-90 rounded-lg p-8 flex items-center justify-center h-32 w-52">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="w-40 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add these animations to your tailwind.config.js
const style = document.createElement("style");
style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes marquee2 {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  .animate-marquee2 {
    animation: marquee2 25s linear infinite;
  }
`;
document.head.appendChild(style);

export default CompanyLogoSlider;
