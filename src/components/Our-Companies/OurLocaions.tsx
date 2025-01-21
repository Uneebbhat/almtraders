import Link from "next/link";
import React from "react";
// import LocationSlider from "@/components/Our-Companies/LocationSlider";
import PakistanSlider from "@/components/Our-Companies/PakistanSlider";
import RetailSlider from "@/components/Our-Companies/RetailSlider";

const OurLocaions = () => {
  return (
    <>
      <section className="py-[40px] bg-black text-white">
        <div className="locations-section">
          <h2 className="text-2xl font-bold mb-6">In the UK – Birmingham 🇬🇧</h2>

          <div className="flex flex-col gap-4">
            <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">ALM Micros</h3>
              <p className="text-white mb-4">
                ALM Micros drives technology innovation and offers cutting-edge
                solutions tailored to the modern business world. As a key player
                in ALM&apos;s global network, we collaborate with international
                partners to bring exceptional products and services to our
                clients.
              </p>
              {/* <p className="text-white mb-4">
                With strong connections to subsidiaries like ALM Traders in
                Pakistan and Golden Gulf line Elect.Devices TR LLC in the UAE,
                we provide businesses with seamless access to the latest tech
                products and services that support growth and success.
              </p> */}
              <Link
                href="https://find-and-update.company-information.service.gov.uk/company/10041873"
                className="text-blue-500 hover:underline font-medium"
              >
                Visit Website
              </Link>
              {/* <LocationSlider /> */}
            </div>

            {/* <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">ALM Tradings</h3>
              <p className="text-white mb-4">
                ALM Tradings, located in Birmingham, offers trusted trading and
                investment solutions that help businesses stay ahead. Our focus
                on delivering reliable, scalable, and cost-effective options has
                positioned us as a leader in the trading sector.
              </p>
              <p className="text-white mb-4">
                By fostering strong business relationships and providing
                tailored solutions, ALM Tradings continues to offer exceptional
                service to clients across various industries.
              </p>
              <Link
                href="https://find-and-update.company-information.service.gov.uk/company/10569888"
                className="text-blue-500 hover:underline font-medium"
              >
                Visit Website
              </Link>
              <LocationSlider />
            </div> */}
          </div>

          <div className="locations-section mt-8">
            <h2 className="text-2xl font-bold mb-6">In UAE 🇦🇪</h2>

            <div className="company-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Golden Gulf line Elect.Devices TR LLC
              </h3>
              <p className="text-white mb-4">
                Golden Gulf line Elect.Devices TR LLC stands as a cornerstone in
                the UAE&apos;s tech industry, offering premium electronic
                devices and tech products to businesses across the region. With
                a reputation for quality and reliability, we serve a wide range
                of clients, providing solutions that meet their unique
                technological needs.
              </p>
              <p className="text-white mb-4">
                Partnering with ALM Micros (UK) and ALM Traders (Pakistan),
                Golden Gulf line Elect.Devices TR LLC is part of a global
                network dedicated to excellence in technology distribution and
                innovation.
              </p>
              <a
                href="https://pcexporters.com/golden-gulf-line-elect-devices-tr-llc-u-a-e/14515"
                className="text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Company Website
              </a>
            </div>
          </div>

          <div className="locations-section mt-8">
            <h2 className="text-2xl font-bold mb-6">In Pakistan 🇵🇰</h2>

            <div className="company-cards flex flex-col gap-4">
              {/* ALM Traders Wholesale */}
              <div className="company-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  ALM Traders Wholesale
                </h3>
                <p className="text-white mb-4">
                  With over 30 years of industry experience, ALM Traders has
                  become one of Pakistan&apos;s most trusted and prominent
                  wholesale distributors. Specializing in high-quality tech
                  products, we cater to businesses globally, ensuring reliable
                  and cost-effective solutions.
                </p>
                <p className="text-white mb-4">
                  Our global network, including partnerships with ALM Micros
                  (UK) and Golden Gulf line Elect.Devices TR LLC (UAE),
                  strengthens our ability to offer cutting-edge technology
                  products at competitive prices.
                </p>
                <Link
                  href="https://www.urdupoint.com/business/directory/detail/alm-traders-79746.html"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Visit Wholesale Website
                </Link>
                <PakistanSlider />
              </div>

              <div className="company-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  ALM Traders Retail
                </h3>
                <p className="text-white mb-4">
                  While our primary focus is wholesale, ALM Traders ventured
                  into retail in 2017 to offer individual customers access to
                  our top-tier tech products. We continue to provide competitive
                  retail offerings, backed by our global supply chain.
                </p>
                <p className="text-white mb-4">
                  Explore our wide range of retail products, but rest assured,
                  our core strength lies in meeting bulk and wholesale demands
                  for businesses worldwide.
                </p>
                <Link
                  href="/"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Visit Retail Website
                </Link>
                <RetailSlider />
              </div>
            </div>
          </div>

          <div className="locations-section mt-8">
            <h2 className="text-2xl font-bold mb-6">Upcoming Companies 🚀</h2>

            <div className="company-cards flex flex-col gap-4">
              {/* ALM Tech */}
              <div className="company-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">ALM Tech</h3>
                <p className="text-white mb-4">
                  ALM Tech is poised to revolutionize the tech industry with
                  groundbreaking innovations. We are dedicated to providing
                  businesses with advanced technological solutions to meet the
                  evolving demands of the digital world.
                </p>
                <p className="text-white mb-4">
                  With a strong focus on R&D and cutting-edge products, ALM Tech
                  is set to become a leader in the tech space, offering scalable
                  solutions that empower businesses globally.
                </p>
              </div>
              <div className="company-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">ALM Technologies</h3>
                <p className="text-white mb-4">
                  ALM Technologies is all about pushing the boundaries of
                  what&apos;s possible with technology. As we prepare to launch,
                  our mission is to develop cutting-edge solutions that drive
                  digital transformation for businesses worldwide.
                </p>
                <p className="text-white mb-4">
                  Focused on technological advancements, ALM Technologies will
                  offer a range of services and products designed to help
                  businesses scale efficiently and stay ahead in the fast-paced
                  digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLocaions;
