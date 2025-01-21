import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Building2, MapPin, Store, Rocket } from "lucide-react";
import PakistanSlider from "@/components/Our-Companies/PakistanSlider";
import RetailSlider from "@/components/Our-Companies/RetailSlider";

interface LocationCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  website?: {
    url: string;
    text: string;
  };
  slider?: React.ReactNode;
}

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  description,
  icon,
  website,
  slider,
}) => (
  <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-900/30 rounded-full shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className="text-white mb-4">
            {paragraph}
          </p>
        ))}
        {website && (
          <Link
            href={website.url}
            className="text-blue-500 hover:underline font-medium inline-block mb-4"
          >
            {website.text}
          </Link>
        )}
        {slider}
      </div>
    </div>
  </div>
);

const OurLocations = () => {
  return (
    <section className="py-10 md:py-16 bg-black text-white">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Our Global Presence
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our network of companies across the UK, UAE, and Pakistan
            </p>
          </div>

          {/* UK Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              In the UK – Birmingham 🇬🇧
            </h2>
            <LocationCard
              title="ALM Micros and ALM Tradings"
              description={[
                "Unit A, 10 Crossfield Road, Kitts Green, Birmingham B33 9HP",
              ]}
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
            />
          </div>

          {/* UAE Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              In UAE 🇦🇪
            </h2>
            <LocationCard
              title="Golden Gulf Line Elect.Devices TR LLC"
              description={["Sharjah Industrial 5, Sharjah, 25695"]}
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
            />
          </div>

          {/* Pakistan Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              In Pakistan 🇵🇰
            </h2>
            <LocationCard
              title="ALM Traders (Warehouse)"
              description={[
                "Chung Molanwar, Multan Road Thokar Niaz Baig, Lahore, Pakistan",
              ]}
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
              slider={<PakistanSlider />}
            />

            {/* Retail Shops Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Store className="w-6 h-6 text-blue-400" />
                Retail Shops
              </h3>
              <LocationCard
                title="Outlet #1"
                description={[
                  "Shop 57, 2nd floor, Hafeez Center, Gulberg 3, Lahore, Pakistan",
                ]}
                icon={<Store className="w-6 h-6 text-blue-400" />}
                // slider={<RetailSlider />}
              />
              <LocationCard
                title="Outlet #2"
                description={[
                  "Shop 18, Basement, Dubai Plaza, 6th Road, Rawalpindi, Pakistan",
                ]}
                icon={<Store className="w-6 h-6 text-blue-400" />}
                // slider={<RetailSlider />}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurLocations;
