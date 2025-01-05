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
                    "url('https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              {/* Content Section */}
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
                    "url('https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
    </div>
  );
};

export default ContactUsers;
