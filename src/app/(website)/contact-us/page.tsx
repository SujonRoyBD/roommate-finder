"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can integrate with email sending API here (like EmailJS, Formspree, etc.)
    alert("Message sent successfully!");
  };

  return (
    <div className="md:px-20 mx-auto  p-6 rounded-xl md:py-20">
    <div className="bg-[#FFD6BA] px-10 w-[340px] md:w-full lg:w-full">
          <h2 className="text-2xl font-bold mb-4 text-center py-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {/* Name */}
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
       <div className="py-4"> <Button  type="submit" className="w-[100px] bg-[#D96F32] py-4">
          Send Message
        </Button></div>
      </form>
    </div>
    <div className="flex justify-center text-center mx-auto py-9">
        <div>
        <div className="flex gap-2">
            <FaPhone />
            <p>Phone: +880-1234-567890</p>
        </div>
        <div className="flex gap-2">
          <MdEmail />
             <p>Email: support@roommatelagbe.com</p>
        </div>
        <div className="flex gap-2">
            <FaRegAddressCard />

            <p> Address: Dhaka, Bangladesh</p>
        </div>
      
        
    </div>
    </div>
    </div>
  ); 
};

export default ContactUs;
