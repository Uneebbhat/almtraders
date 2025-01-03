// import Image from "next/image";

const users = [
  {
    name: "Farrukh Jabbar Malik",
    email: "alm@example.com",
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
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
  { name: "Omar Malik", email: "info@almtrading.biz", role: "Directors" },
];

const ContactUsers = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {users.map((user, i) => (
          <div
            className="relative bg-[url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')] w-[300px] h-[260px] object-auto bg-no-repeat bg-cover bg-center px-4"
            key={i}
          >
            <div className="absolute bottom-2 bg-white w-full rounded p-2">
              <h3 className="text-black body-large font-bold">{user.name}</h3>
              <h3 className="text-black body-large font-medium">{user.role}</h3>
              <p className="text-black body-small">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactUsers;
