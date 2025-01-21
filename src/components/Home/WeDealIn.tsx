import React from "react";
import Container from "../Container";
import {
  Laptop,
  Monitor,
  Printer,
  HardDrive,
  Cpu,
  MemoryStick,
  Microchip,
  KeyboardMusic,
  LayoutGrid,
} from "lucide-react";

interface Service {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
}

const services: Service[] = [
  {
    title: "Laptops",
    icon: Laptop,
    description: "Wide range of portable computers",
  },
  {
    title: "Computers",
    icon: Cpu,
    description: "Desktop PCs and workstations",
  },
  {
    title: "Accessories",
    icon: KeyboardMusic,
    description: "Essential computer peripherals",
  },
  {
    title: "Printers",
    icon: Printer,
    description: "Print and scanning solutions",
  },
  {
    title: "Hard Drives",
    icon: HardDrive,
    description: "Storage solutions and SSDs",
  },
  {
    title: "RAM",
    icon: MemoryStick,
    description: "Memory upgrades and modules",
  },
  {
    title: "Graphic Cards",
    icon: Microchip,
    description: "Gaming and professional GPUs",
  },
  {
    title: "Monitors",
    icon: Monitor,
    description: "Display solutions for all needs",
  },
  {
    title: "Other IT Products",
    icon: LayoutGrid,
    description: "Additional IT hardware and solutions",
  },
];

interface ServiceCardProps {
  title: string;
  Icon: React.ComponentType<any>;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  Icon,
  description,
}) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const WeDealIn = () => {
  return (
    <section className="py-10 md:py-16 bg-black text-white">
      <Container>
        <div>
          <h2 className="h3 md:h2 text-center">What We Deal In?</h2>
          <h4 className="h5 text-center">
            We deal in high end, mid range and low end IT Products
          </h4>
          <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    Icon={service.icon}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeDealIn;
