import React from "react";
import Container from "@/components/Container";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/categories", label: "Categories" },
  ];

  return (
    <>
      <footer className="py-[60px] bg-black text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h5 className="text-lg font-semibold">About us</h5>
              <p className="text-sm mt-4 leading-relaxed">
                <span className="font-bold text-lg">
                  Interested in Wholesale Buying and Selling?
                </span>
                <br />
                📞 Call us at:{" "}
                <span className="text-blue-400 font-bold">
                  0324-444-4499
                </span>{" "}
                or{" "}
                <Link
                  href="https://wa.me/+447300019359"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <span className="font-bold text-blue-400">07300 019359</span>
                </Link>
                <br />
                ✉️ Email us at:{" "}
                <Link
                  href="mailto:shehzadwasemm55@gmail.com"
                  className="text-blue-400 font-semibold hover:text-blue-500 transition-colors duration-200"
                >
                  shehzadwasemm55@gmail.com
                </Link>
              </p>
            </div>

            <div className="flex justify-center md:justify-center">
              <div className="w-24 h-24">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Almtrader"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="rounded-full object-contain"
                  />
                </Link>
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="hover:text-red hover:underline transition-all text-sm inline text-left md:text-right"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} AlmTraders. All Rights Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
