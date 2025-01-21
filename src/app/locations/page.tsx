import React from "react";
import GoogleMap from "@/components/GoogleMap";

const page: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Locations</h1>

      {/* Warehouse in Pakistan */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Warehouse in Pakistan</h2>
        <p>Chung Molanwar, Multan Road, Thokar Niaz Baig, Lahore, Pakistan</p>
        <GoogleMap src="https://www.google.com/maps/embed?pb=PASTE_IFRAME_LINK_HERE" />
      </section>

      {/* Warehouse in UK */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Warehouse in UK</h2>
        <p>Unit A, 10 Crossfield Road, Kitts Green, Birmingham B33 9HP</p>
        <GoogleMap src="https://www.google.com/maps/embed?pb=PASTE_IFRAME_LINK_HERE" />
      </section>

      {/* Warehouse in UAE */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Warehouse in UAE</h2>
        <p>
          Golden Gulf Line Elect.Devices TR LLC, Sharjah Industrial 5, Sharjah,
          25695
        </p>
        <GoogleMap src="https://www.google.com/maps/embed?pb=PASTE_IFRAME_LINK_HERE" />
      </section>

      {/* Retail Shops */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Retail Shops</h2>

        {/* Outlet #1 */}
        <div className="mb-4">
          <h3 className="text-lg font-medium">Outlet #1</h3>
          <p>Shop 57, 2nd Floor, Hafeez Center, Gulberg 3, Lahore, Pakistan</p>
          <GoogleMap src="https://www.google.com/maps/embed?pb=PASTE_IFRAME_LINK_HERE" />
        </div>

        {/* Outlet #2 */}
        <div>
          <h3 className="text-lg font-medium">Outlet #2</h3>
          <p>Shop 18, Basement Dubai Plaza, 6th Road, Rawalpindi, Pakistan</p>
          <GoogleMap src="https://www.google.com/maps/embed?pb=PASTE_IFRAME_LINK_HERE" />
        </div>
      </section>
    </div>
  );
};

export default page;
