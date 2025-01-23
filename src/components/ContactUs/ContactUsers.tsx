"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const ContactUsers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const users = [
    {
      name: "Farrukh Jabbar Malik",
      email: "info@almmicros.co.uk",
      role: "Founder and CEO",
    },
    {
      name: "Waseem Jabbar Malik",
      email: "wasimjabbar@yahoo.com",
      role: "Founder and CEO",
    },
    {
      name: "Shakeel Jabbar Malik",
      email: "shakeelmalik_2009@hotmail.com",
      role: "Founder and CEO",
    },
  ];

  const directors = [
    {
      name: "Shahzad Waseem Malik",
      email: "info@almtraders.com",
      contact: "+44 07300 019359",
      role: "Director",
      icon: "/assets/linkedin.png",
    },

    {
      name: "Umer Malik",
      email: "info@almtrading.biz",
      role: "Director",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/assets/contact.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 10,
          }}
        ></div>
        <h2
          className="h2"
          style={{
            position: "relative",
            zIndex: 20,
            color: "#fff",
            textAlign: "center",
          }}
          data-aos="fade-down"
        >
          Contact Us
        </h2>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">
          Get in Touch with Us
        </h2>
        <p
          className="text-white mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          For any product-related enquiries, pricing information, or assistance
          with your orders, please reach out Via email and Business WhatsApp for
          Quick Response
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[420px] group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-3/6">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                    alt={user.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg text-center px-2">
                      {user.role}
                    </p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                    {user.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{user.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Director Slides */}
          {directors.map((director, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[420px] group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-3/6">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                    alt={director.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg text-center px-2">
                      {director.role}
                    </p>
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col items-center justify-center">
                  <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600">
                    {director.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{director.role}</p>
                  {director.email && (
                    <p className="text-sm text-gray-600">
                      Email: {director.email}
                    </p>
                  )}
                  {director.contact && (
                    <p className="text-sm text-gray-600">
                      Contact: {director.contact}
                    </p>
                  )}
                  <Link
                    href={
                      "https://pk.linkedin.com/in/shahzad-waseem-malik-935004266"
                    }
                    target="_blank"
                  >
                    <Image
                      src={director.icon as string}
                      alt="Linkedin"
                      width={25}
                      height={25}
                      className="my-4"
                    />
                  </Link>
                </div>
                <div></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContactUsers;
