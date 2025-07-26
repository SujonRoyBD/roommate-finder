"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdHome } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-orange-500">
      {/* ✅ Mobile View Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        {/* Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <RxCross2 className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
        </button>

        {/* Home Icon */}
        <Link href="/home">
          <MdHome className="text-white w-6 h-6 -ml-[60px]" />
        </Link>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <Link href="/login">
            <button className="border border-white text-white px-3 py-1 rounded text-sm">Login</button>
          </Link>
          <Link href="/singup">
            <button className="border border-white text-white px-3 py-1 rounded text-sm">Signup</button>
          </Link>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-200 text-white px-4 py-2 flex flex-col gap-2">
          <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/findroommate" onClick={() => setIsOpen(false)}>All Roommates</Link>
          <Link href="/aboutroommate" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

      {/* ✅ Desktop View Navbar */}
      <div className="hidden md:flex items-center justify-between px-20 py-4 bg-orange-500">
        {/* Logo */}
        <Link href="/home" className="text-white flex items-center gap-2 text-xl font-bold">
          <MdHome className="h-6 w-6" />
          Roommate Lagbe
        </Link>

        {/* Menu Links */}
        <div className="flex gap-8 text-white">
          <Link href="/home">Home</Link>
          <Link href="/findroommate">All Roommates</Link>
          <Link href="/aboutroommate">About Us</Link>
          <Link href="/contact-us">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link href="/login">
            <button className="border border-white text-white px-3 py-1 rounded-sm shadow">Login</button>
          </Link>
          <Link href="/singup">
            <button className="border border-white text-white px-3 py-1 rounded-sm shadow">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
