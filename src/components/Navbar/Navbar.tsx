import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-orange-500 py-5 sticky top-0 z-50'>
           <div className='flex justify-between px-20 '>
            <Link href="/home"><div className='text-white'>
                Roommate Lagbe
            </div></Link>
            <div className='flex gap-8 text-white'>
                <Link href="/home">Home</Link>
                <Link href="/findroommate"><p>All Roommates</p></Link>
                <Link href="/aboutroommate">About Us</Link>
                <Link href="/contact-us">Contact</Link>
            </div>
            <div className='flex gap-3'>
                <Link href="/login"><button className='border border-white text-white px-3 py-1 shadow-lg rounded-sm'>Login</button></Link>
                 <Link href="/singup"><button className='border border-white text-white px-3 py-1 shadow-lg rounded-sm'>SingUp</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Navbar;