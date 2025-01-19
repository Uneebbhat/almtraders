"use client";

import React, { useEffect } from "react";
import { Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

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
    {
      name: "Shahzad Waseem Malik",
      email: "shehzadwaseem55@gmail.com",
      role: "Directors",
    },
    {
      name: "Omar Malik",
      email: "info@almtrading.biz",
      role: "Directors",
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
          We would love to hear from you! Whether you have a question about our
          products, need technical support, or you want to say hello, our team
          is here to help.
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-3/5">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                    alt={user.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="h4 font-bold">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.role}</p>
                  <div className="flex items-center justify-center mt-4 space-x-2 text-blue-600">
                    <Mail size={16} />
                    <a
                      href={`mailto:${user.email}`}
                      className="text-sm hover:underline"
                    >
                      {user.email}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContactUsers;
