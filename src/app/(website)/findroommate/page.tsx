
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneDollar } from "react-icons/ai";
import { TiDevicePhone } from "react-icons/ti";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineLiving } from "react-icons/md";
import Link from 'next/link';
const data =[
    {
        id:1,
        location:"Uttora",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:2,
        location:"Khilket,Dhaka",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:3,
        location:"Banani,Dhaka",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:"4",
        location:"Rangpure",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:"5",
        location:"Chittagong",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
    {
        id:"6",
        location:"Barisal",
        title:"Search. Match. Move in. Roommate finding made simple.",
        rent:"Rent Amount: 8000",
        avilable:"Available",
        roometype:"Room Type:Shared",
        city:"Living in the city..."
    },
]
const FindRoommate = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-bold text-black py-4">Find Your Roommate</h2>
            <p className="text-center text-black">Find Your Roommate is a platform that helps users find compatible roommates through personalized matching and secure communication.</p>

              <div className="text-black  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 px-10 md:px-20 py-9">
            {

                  data.map((item)=>{
                    return <div key={item.id} className="border border-black px-2 w-[300px] md:w-[300px] lg:w-[300px] rounded-md">
                       <div className="gap-3 text-white "> <p className='bg-[#D96F32] opacity-160 rounded-b-md w-[150px] md:w-[130px] lg:w-[150px] flex justify-center items-center mx-auto py-1'><CiLocationOn className="text-white font-bold text-2xl"/>{item.location}</p></div>
                        <p className='text-2xl font-bold text-black py-2 text-center'>{item.title}</p>
                       <div className="flex justify-center items-center mx-auto ">
                       <div>
                          <div className="flex gap-1  ">
                            <AiTwotoneDollar />
                        <p>{item.rent}</p>
                        </div>
                         <div className="flex gap-1 ">
                           <TiDevicePhone /> 
                        <p>{item.avilable}</p>
                        </div>
                        <div className="flex gap-1 ">
                           <MdOutlineBedroomParent />
                        <p>{item.roometype}</p>
                        </div>
                        <div className="flex gap-1 ">
                            <MdOutlineLiving />
                        <p>{item.city}</p>
                        </div>
                       <Link href={`/viewroome/${item.id}`}>
                        <div className="py-6"><button className="px-3 py-1 rounded-md border border-black ">VIEW DETAILS</button></div>
                       </Link>
                       </div>
                     </div>
                    </div>
                })
                 }
              </div>
           
        </div>
    );
};

export default FindRoommate;