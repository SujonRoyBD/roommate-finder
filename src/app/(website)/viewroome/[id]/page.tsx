"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import { BiLike } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";

interface ShowData{
    id:number;
    location:string;
    title:string;
    rent:string;
    avilable:string;
    roometype:string;
    city:string;
    img:string;
    desc:string;
}

const data:ShowData[] =[
    {
        id:1,
        img : "/assets/service1.jpg",
        location:"Uttora",
          desc:"Description: Looking for a campus roommate you can trust? We connect students with similar schedules, habits, and interests—so you can focus on school, not stress. Say goodbye to unreliable listings and hello to safe, social co-living. Perfect for dorms, off-campus housing, or first-time renters.",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:2,
        img : "/assets/service1.jpg",
        location:"Khilket,Dhaka",
          desc:"Description: Looking for a campus roommate you can trust? We connect students with similar schedules, habits, and interests—so you can focus on school, not stress. Say goodbye to unreliable listings and hello to safe, social co-living. Perfect for dorms, off-campus housing, or first-time renters.",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:3,
        img : "/assets/service1.jpg",
        location:"Banani,Dhaka",
          desc:"Description: Looking for a campus roommate you can trust? We connect students with similar schedules, habits, and interests—so you can focus on school, not stress. Say goodbye to unreliable listings and hello to safe, social co-living. Perfect for dorms, off-campus housing, or first-time renters.",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:4,
img : "/assets/service1.jpg",
        location:"Rangpure",
          desc:"Description: Looking for a campus roommate you can trust? We connect students with similar schedules, habits, and interests—so you can focus on school, not stress. Say goodbye to unreliable listings and hello to safe, social co-living. Perfect for dorms, off-campus housing, or first-time renters.",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:5,
        img : "/assets/service1.jpg",
        location:"Chittagong",
          desc:"Description: Looking for a campus roommate you can trust? We connect students with similar schedules, habits, and interests—so you can focus on school, not stress. Say goodbye to unreliable listings and hello to safe, social co-living. Perfect for dorms, off-campus housing, or first-time renters.",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:6,
        img : "/assets/service1.jpg",
        location:"Barisal",
        desc:"Description: Looking for a campus roommate you can trust? We connect students with similar schedules, habits, and interests—so you can focus on school, not stress. Say goodbye to unreliable listings and hello to safe, social co-living. Perfect for dorms, off-campus housing, or first-time renters.",
        title:"Search. Match. Move in. ",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
]
const RoommateDetails = () => {
   
   const params = useParams();
//    jodi id type string bola thake Thyle ay vabe hobe

    // const { id } = params; 
    // :
    //ata holo number k string a convert kora//
const id = parseInt(params.id as string);
  const farm = data.find((item) => item.id === id);

  if (!farm) return <div>Farm not found</div>;


  return (
    <div className="px-5 md:px-20 lg:px-20 py-20">
      <div>
        <Image src={farm.img} alt="room image" width={300} height={400} className="w-full h-[400px]"/>
        <h2 className="text-2xl font-bold">{farm.title}</h2>
        <div className='flex gap-1'>
          <CiLocationOn className="mt-1"/>
        <p className="">{farm.location}</p>
        </div>
        <p className="">{farm.desc}</p>
        <p className="">{farm.rent}</p>
        <div className="w-[30px]">
          <p className="">....................................................................................................</p>
        </div>
        <div className='flex gap-6 text-white font-xl py-5'>
           
            <button className="bg-orange-600 px-1 py-1 rounded-lg">Availablity: Available</button>
        
        <button className="bg-orange-600 px-1 py-1 rounded-lg">Roome Type: Shared</button>
       
        <button className="bg-orange-600 px-1 py-1 rounded-lg">Lifestyle preferences: Night Owl</button>
        </div>
           <p>Roommate Contact Details:</p>
           <li>Name: Abdul Barik</li>
           <li>Email: abdulbarik22385m@gmail.com</li>
           <BiLike className="w-9 "/>
      </div>
    </div>
  );
};

export default RoommateDetails;
