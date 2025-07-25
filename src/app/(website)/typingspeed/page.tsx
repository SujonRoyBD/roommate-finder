import React from 'react';

const TypingSpeed = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 py-9 gap-9'>
            <div className='sm: w-full h-[250px] rounded-lg bg-[#FFD6BA]'>
        <p className="text-center font-bold py-3">Typing Speed Test</p>
        <p className='px-6 py-5'>The quick brown fox jumps over the lazy dog|</p>
       <div className="px-6">
         <textarea className="w-full md:w-[500px] bg-[#FFD6BA] h-20 border-2 border-white rounded px-2 " placeholder="Start typing here..."></textarea>
       </div>

            </div>
            <div className='sm: w-full h-[250px] rounded-lg bg-[#FFD6BA]'>
fdf
            </div>
        </div>
    );
};

export default TypingSpeed;