"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/categories", label: "Categories" },
    { path: "/our-companies", label: "Our Companies" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="relative z-50  bg-black">
      <Container>
        <div className="flex justify-between items-center py-[15px] relative z-50">
          <div>
            <Link href="/">
              <Image src={logo} width={60} height={60} alt="Almtraders" />
            </Link>
          </div>

          <nav className="hidden md:flex gap-[40px]">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`${
                  pathName === route.path
                    ? "text-red font-semibold"
                    : "text-white hover:text-red font-semibold transition-all"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen
              ? "top-[60px] opacity-100"
              : "-top-full opacity-0 z-40 py-8 shadow-lg"
          } md:hidden absolute left-0 w-full bg-black text-white flex flex-col items-center gap-6 mt-6 transition-all duration-300 ease-in-out transform z-40 py-8`}
          style={{
            transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`${
                pathName === route.path
                  ? "text-red underline font-semibold"
                  : "text-white hover:text-red hover:underline hover:scale-105 transition-all duration-200 ease-in-out"
              } text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
