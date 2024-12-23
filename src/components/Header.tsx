"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/categories", label: "Categories" },
  ];

  return (
    <header className="bg-black">
      <Container>
        <div className="flex justify-between items-center py-[15px] relative z-20">
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
                    ? "text-red underline"
                    : "text-white hover:text-red hover:underline transition-all"
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
                  stroke="currentColor"
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
            isMenuOpen ? "top-[78px] opacity-100" : "-top-[100%] opacity-0"
          } md:hidden absolute left-0 w-full bg-black py-4 text-white flex flex-col items-center gap-4 mt-4 transition-all duration-400 ease-linear`}
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`${
                pathName === route.path
                  ? "text-red underline"
                  : "hover:text-red hover:underline transition-all"
              }`}
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
