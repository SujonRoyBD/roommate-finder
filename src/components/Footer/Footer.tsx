import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-8 md:px-16 bg-[#FFD6BA] gap-16 py-9">
      <div>
        <p>Contact details</p>
        <button>Email: abdulbarik1997m@gmail.com</button>
        <button>Phone: 01575092830</button>
        <button>Address: 123 Main Street, Dhaka, Bangladesh</button>
      </div>
      <div>
        <p>Terms and Conditions</p>
        <button>User Responsibilities</button>
        <button>No Guarantees or Liability</button>
        <button>Account Suspension and Termination</button>
      </div>
      <div>
        <p>Social Media</p>
        <div className="flex text-white gap-3 ">
<CiTwitter />
<FaFacebookF />
<FaYoutube />


        </div>
        <p>© 2025 Roommate Lagbe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
