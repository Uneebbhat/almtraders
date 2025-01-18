"use client";

import React, { useEffect } from "react";
import { Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const founders = users.filter((user) =>
    user.role.toLowerCase().includes("founder")
  );
  const directors = users.filter((user) =>
    user.role.toLowerCase().includes("director")
  );

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

        {/* Founders Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6" data-aos="fade-up">
            Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-center mb-2">
                  {user.name}
                </h4>
                <p className="text-gray-600 text-center mb-3">{user.role}</p>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <Mail size={18} />
                  <a
                    href={`mailto:${user.email}`}
                    className="text-sm hover:underline"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Directors Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6" data-aos="fade-up">
            Directors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-green-600">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-center mb-2">
                  {user.name}
                </h4>
                <p className="text-gray-600 text-center mb-3">{user.role}</p>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <Mail size={18} />
                  <a
                    href={`mailto:${user.email}`}
                    className="text-sm hover:underline"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsers;
