import React from "react";

const logos = [
  { name: "HP", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  { name: "DELL", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  { name: "LENOVO", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  { name: "APPLE", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  { name: "ASUS", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  {
    name: "GIGABYTE",
    image: "https://cdn-icons-png.flaticon.com/512/0/747.png",
  },
  {
    name: "FUJITSU",
    image: "https://cdn-icons-png.flaticon.com/512/0/747.png",
  },
  {
    name: "PANASONIC",
    image: "https://cdn-icons-png.flaticon.com/512/0/747.png",
  },
  { name: "ACER", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  { name: "AOC", image: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
];

const CompanyLogoSlider = () => {
  return (
    <div className="py-[60px] bg-black">
      <div className="slider">
        {logos.map((logo, index) => (
          <div key={index} className="slider-item">
            <img src={logo.image} alt={logo.name} className="slider-image" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="slider-item">
            <img src={logo.image} alt={logo.name} className="slider-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogoSlider;
