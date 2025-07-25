import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#FFD6BA] py-5 sticky  z-50'>
           <div className='flex justify-between px-20 '>
            <div className='text-white'>
                Roommate Lagbe
            </div>
            <div className='flex gap-8 text-white'>
                <p>Home</p>
                <p>All Roommate</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>
            <div className='flex gap-3'>
                <button className='border border-black text-white px-3 py-1 shadow-lg rounded-sm'>Login</button>
                <button className='border border-black text-white px-3 py-1 shadow-lg rounded-sm'>Sing Up</button>
            </div>
           </div>
        </div>
    );
};

export default Navbar;