import Image from 'next/image';
import React from 'react';
const data =[
    {
        id:1,
        img:"/assets/service1.jpg",
        title:"199+",
        desc:"Service Provider"
    },
    {
          id:2,
        img:"/assets/service2.png",
        title:"467+",
        desc:"Total Provider"
    },
    {
          id:3,
        img:"/assets/service3.jpg",
        title:"1,900+",
        desc:"Total Clients"
    },
    {
          id:4,
        img:"/assets/service4.png",
        title:"300+",
        desc:"Total Stuffs"
    },
]

const RoommateService = () => {
    return (
        <div>
            <p className='text-center text-2xl font-bold py-2'>We Provide Best Find Roommate Service</p>
            <p className='text-center'>We provide the best roommate-matching service to help you find a compatible, reliable, and safe living partner with ease.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 px-10 md:px-20 ">
                {
                    data.map((item)=>{
                        return <div key={item.id} className='bg-[#F8F3CE] px-16 md:px-12 pt-5 rounded-md w-[300px] md:w-[225px] h-[230px]'>
                            <Image src={item.img} alt='service' height={100} width={150} className='h-[100px] w-[150px]'/> 
                            <p className='text-2xl font-bold py-2'>{item.title}</p>
                            <p>{item.desc}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default RoommateService;