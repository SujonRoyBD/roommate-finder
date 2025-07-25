import React from "react";
import { FaRegAddressCard } from "react-icons/fa6";
const data = [
  {
    id: 1,
    icon: <FaRegAddressCard />,
    title: "Our Mission",
    desc: "Our mission is to connect people looking for roommates or rooms in a trustworthy and easy-to-use environment. We focus on providing verified listings, user profiles, and filters to match your preferences, budget, and lifestyle.",
  },
  {
    id: 2,
    icon: <FaRegAddressCard />,
    title: "Our Mission",
    desc: "Our mission is to connect people looking for roommates or rooms in a trustworthy and easy-to-use environment. We focus on providing verified listings, user profiles, and filters to match your preferences, budget, and lifestyle.",
  },
  {
    id: 3,
    title: "Our Mission",
    desc: "Our mission is to connect people looking for roommates or rooms in a trustworthy and easy-to-use environment. We focus on providing verified listings, user profiles, and filters to match your preferences, budget, and lifestyle.",
  },
  {
    id: 4,
    title: "Our Mission",
    desc: "Our mission is to connect people looking for roommates or rooms in a trustworthy and easy-to-use environment. We focus on providing verified listings, user profiles, and filters to match your preferences, budget, and lifestyle.",
  },
];

const AboutRoommate = () => {
  return (
    <div className="px-20">
      <div className="bg-[#FFD6BA] px-5">
        <p className="text-2xl font-bold text-center py-5">
          About Roommate Lagbe
        </p>
        <p className="text-center">
          Roommate Lagbe is a platform designed to help you find the perfect
          roommate and shared living space with ease. Whet her you`&apos;` a
          student, professional, or just looking to split rent, we make the
          process hassle-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-9 gap-9">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex gap-2">
                  <p className="mt-1">{item.icon}</p>
                  <p>{item.title}</p>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutRoommate;
