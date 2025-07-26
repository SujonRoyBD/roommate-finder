import React from "react";
import { FaHome } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { SlPlane } from "react-icons/sl";
import { CiLollipop } from "react-icons/ci";

const data = [
  {
    id: 1,
    icon: <FaHome className="text-purple-500 text-2xl"/>,
    title: "Our Mission",
    desc: "Our mission is to connect people looking for roommates or rooms in a trustworthy and easy-to-use environment. We focus on providing verified listings, user profiles, and filters to match your preferences, budget, and lifestyle.",
  },
  {
    id: 2,
    icon: <FcBusinessman className="text-2xl"/>,
    title: " Who We Serve",
    desc: "We cater to students, job holders, travelers, and anyone seeking comfortable and affordable shared accommodation in Bangladesh. Our goal is to create a community where finding a roommate feels safe and convenient.",
  },
  {
    id: 3,
    icon:<SlPlane  className="text-green-600 text-xl"/>,
    title: " Why Choose Us",
    desc: ".Easy to post and browse ads Verified profiles and contact info Filter by city, budget, gender, and more Active community and support",
  },
  {
    id: 4,
    icon:<CiLollipop className="text-pink-600 text-2xl"/>,
    title: " Based in Bangladesh",
    desc: "Built for the needs of the local community, Roommate Lagbe helps people across Dhaka, Chattogram, Sylhet, and more find suitable living arrangements.",
  },
];

const AboutRoommate = () => {
  return (
    <div className="px-8 md:px-20 rounded-lg py-">
      <div className="bg-[#FFD6BA] rounded-xl px-5">
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
                  <p className="font-bold text-xl">{item.title}</p>
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
