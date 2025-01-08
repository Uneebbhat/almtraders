import Link from "next/link";

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
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
];

const ContactUsers = () => {
  const founders = users.filter((user) =>
    user.role.toLowerCase().includes("founder")
  );
  const directors = users.filter((user) =>
    user.role.toLowerCase().includes("director")
  );

  return (
    <div className="mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Founders and CEO&apos;s
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {founders.map((user, i) => (
            <div
              className="relative w-[280px] h-[320px] rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
              key={i}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white p-4">
                <h3 className="text-lg font-bold mb-1">{user.name}</h3>
                <p className="text-sm font-medium">{user.role}</p>
                <p className="text-xs mt-1">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Directors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {directors.map((user, i) => (
            <div
              className="relative w-[280px] h-[320px] rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
              key={i}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white p-4">
                <h3 className="text-lg font-bold mb-1">{user.name}</h3>
                <p className="text-sm font-medium">{user.role}</p>
                <p className="text-xs mt-1">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-extrabold mb-6 tracking-wide">
          📞 For Wholesale Buying and Selling
        </h2>
        <div className="space-y-4">
          <p className="text-lg">
            Contact:{" "}
            <Link
              href="mailto:shehzadwasemm55@gmail.com"
              className="text-blue-400 font-semibold hover:text-blue-500 transition-colors duration-200"
            >
              shehzadwasemm55@gmail.com
            </Link>
          </p>
          <p className="text-lg font-medium">
            📱 Phone:{" "}
            <span className="font-bold text-blue-400">0324 4444999</span>
          </p>
          <p className="text-lg font-medium">
            💬 WhatsApp:{" "}
            <Link
              href="https://wa.me/+447300019359"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <span className="font-bold text-blue-400">07300 019359</span>
            </Link>
          </p>
        </div>
        {/* <div className="mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            Contact Us Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUsers;
