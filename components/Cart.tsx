"use client";
import React, { useState } from 'react';
import CartLogo from "../public/panda.png";
import Image from 'next/image';
import { Button } from './ui/button';

const Cart: React.FC = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  return (
    <div className="w-full h-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col p-2">
      {/* Toggle Section (Delivery / Pickup) */}

      <div className='overflow-y-scroll'>
        <div className="flex items-center rounded-xl justify-between bg-secondary-lighter p-2">
          <button
            onClick={() => setIsDelivery(true)}
            className={`w-1/2 py-4 ${isDelivery ? 'bg-white border border-gray-300' : 'bg-transparent'} text-center font-semibold text-gray-700  rounded-md`}
          >
            Delivery
          </button>
          <button
            onClick={() => setIsDelivery(false)}
            className={`w-1/2 py-4 ${!isDelivery ? 'bg-white border border-gray-300' : 'bg-transparent'} text-center font-semibold text-gray-700  rounded-md`}
          >
            Pickup
          </button>
        </div>

        

        {/* Placeholder if no products in cart */}
        <div className="flex flex-col items-center justify-center flex-1 p-4 text-center min-h-[400px]">
          <Image alt='Panda in basket' height={140} width={140} src={CartLogo} />
          <h2 className='text-xl font-bold text-black'>Hungry?</h2>
          <span className='text-secondary-dark'>You haven't added anything to your cart!</span>

        </div>
      </div>


      {/* Fixed Footer Section */}
      <div className="border-t border-gray-300 p-4 bg-white">
        <div className="flex justify-between items-center mb-2">
          <p className='font-bold text-black'>
            Total <span className='font-light text-sm text-secondary-dark'>(incl. fees and tax)</span>
          </p>
          <span className="font-semibold">Rs. 0</span>
        </div>
        <div className="mb-4">
          <a href="#" className="text-secondary-dark font-semibold underline">
            See summary
          </a>
        </div>
        <Button className="w-full py-3 px-4 bg-secondary-medium text-white font-semibold rounded-md transition duration-200">
          Review Payment and Address
        </Button>
      </div>
    </div>
  );
};

export default Cart;
