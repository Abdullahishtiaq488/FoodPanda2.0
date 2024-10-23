import React from 'react';
import Image from 'next/image';
import { countries, footerLinks } from '../../data/FooterLinks'; // Ensure this file exists with the correct data structure
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{fontWeight: "550"}} className="bg--lighter py-8 px-[4rem] lg-h-screen  text-gray-600">
      {/* First Div - Countries */}
      <div className="w-full mb-4 text-left">
        <hr className="border-secondary-light" />
        <div className="flex justify-start py-8">
          {countries.map((country, index) => (
            <span key={country} className={`relative inline-block `}>
              <span className="underline cursor-pointer relative group">
                {country}
                <span className="absolute -bottom-[2px] left-0 w-0 h-1 bg-current transition-all duration-300 group-hover:w-full bg-black group-hover:h-[3px]"></span>
              </span>
              {index < countries.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>

        <hr className="border-secondary-light" />
      </div>

      {/* Second Div - Links with © Foodpanda */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 text-left py-4 ">
        {/* First Column: © Foodpanda */}
        <div className="col-span-1 text-left mb-2">
          <p>© foodpanda</p>
        </div>

        {/* Remaining Columns for Links */}
        {Array.from({ length: 3 }).map((_, colIndex) => (
          <div key={colIndex} className="col-span-1">
            {footerLinks.slice(colIndex * Math.ceil(footerLinks.length / 3), (colIndex + 1) * Math.ceil(footerLinks.length / 3)).map(link => (
              <p key={link.title} className="relative p-1 ">
                <span className="underline cursor-pointer relative group inline-block overflow-hidden">
                  {link.title}
                  <span className="absolute bottom-[2px] bg-black left-0 w-0 h-1 bg-current transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
                </span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <hr className="border-secondary-light" />

      {/* Last Div - Images and Social Media Icons */}
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center relative h-[40px]">
          <div className="relative w-[138px] h-[39px]">
            <Image src="/food-logo.png" alt="Food Logo" layout="fill" objectFit="contain" />
          </div>

          {/* Big Separator */}
          <span className="text-gray-600 h-full text-4xl mx-4 font-extralight">|</span> {/* Increased size and added margin */}

          <div className="relative w-[160px] h-[32px]">
            <Image src="/delivery-hero-logo.png" alt="Delivery Hero" layout="fill" objectFit="contain" />
          </div>
        </div>

        
        
        <div className="flex flex-row gap-5 justify-between items-center">
          <a href="#" className="rounded-full border-2 border-secondary-light p-1 animation-all duration-200 hover:p-2 hover:-mx-1 hover:bg-secondary-light">
            {/* Instagram Icon */}
            <Instagram className='w-5 h-5' />
          </a>

          <a href="#" className="rounded-full border-2 border-secondary-light p-1 animation-all duration-200 hover:p-2 hover:-mx-1 hover:bg-secondary-light">
            {/* Facebook Icon */}
            <Facebook className='w-5 h-5' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
