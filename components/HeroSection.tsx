import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-[38rem]  w-full bg-red-300'>
      {/* Hero Banner */}
      <div className="flex flex-row items-center justify-between bg-gray-100 h-full w-full ">
        {/* Left Content */}
        <div className=" w-auto flex flex-col items-center justify md:items-start text-center md:text-left space-y-6 pl-[4rem]">
          <h1 className="text-4xl font-bold">
            It's the food and groceries you love, delivered
          </h1>

          {/* Search Bar and Button */}
          
        </div>

        {/* Right Image */}
        <div className=" w-[45%] h-full relative">
        <div className='w-auto h-[608px]  relative flex flex-col items-baseline justify-center shrink-0'>
          <Image
            src="/hero-crop.png"
            alt="Hero Banner"
            fill
            className="object-contain"
          />
        </div>
        </div>
      </div>


    </section>
  );
  
}

export default HeroSection