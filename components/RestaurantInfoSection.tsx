"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { RestaurantData } from '@/types/ProductTypes';
import Modal from './Modaldialogue';

interface RestaurantLayoutProps {
    restaurant: RestaurantData;
}



const RestaurantInfoSection: React.FC<RestaurantLayoutProps> = ({ restaurant }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    
    return (
        <section>
            <div className="grid grid-cols-1 py-6 gap-4">
                {/* Left Div: Image and Info */}
                <div className='flex flex-col'>
                    <div className="flex items-start gap-4 mb-4">
                        {/* Image */}
                        <div className="flex justify-center rounded-lg items-center w-[90px] h-[90px] md:w-[146px] md:h-[146px] bg-gray-100">
                            <div className="w-16 h-16 md:w-32 md:h-32">
                                <Image
                                    alt={restaurant.logo}
                                    src={restaurant.logo}
                                    className="object-contain w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Restaurant Details */}
                        <div className="flex flex-col flex-1 gap-2">
                            <div className="text-sm text-secondary-dark">
                                {restaurant.tags.map((tag, index) => (
                                    <span key={index}>
                                        {tag}
                                        {index < restaurant.tags.length - 1 && <span className="mx-1">.</span>}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-xl md:text-4xl font-bold text-black">{restaurant.name}</h1>
                            <p className="text-primary">Free Delivery</p>

                            <div className="hidden md:flex items-center gap-4 text-sm mt-2">

                                <span className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 text-yellow-300" stroke='orange' strokeWidth='4'>
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
                                    </svg>
                                    {restaurant.rating}/5 (4000+)
                                </span>
                                <button className='p-2 rounded-lg font-semibold hover:bg-secondary-lighter'>
                                    <span className='font-semibold'>See Reviews</span></button>

                                <button className="flex items-center space-x-2 p-2 rounded-lg font-semibold hover:bg-secondary-lighter" onClick={openModal}>
                                    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
                                        <path d="M12 17V11" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#1C274C" />
                                    </svg>
                                    <span>More info</span>
                                </button>
                                <Modal isOpen={isModalOpen} onClose={closeModal}>
                                    <h2 className="text-lg font-bold">Modal Title</h2>
                                    <p>This is a simple modal dialog.</p>
                                    <button onClick={closeModal} className="bg-green-500 text-white p-2 rounded mt-4">
                                        Close
                                    </button>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/* Rating and More Info - Positioned below the image on small and medium screens */}
                    <div className="flex md:hidden items-center gap-4 text-sm">
                        {/* This flex div is hidden on small screens */}
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3 h-3 text-yellow-300" stroke='orange' strokeWidth='4'>
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
                            </svg>
                            {restaurant.rating}/5 (4000+)
                        </span>
                        <span className=' font-semibold'>See Reviews</span>

                        <button className="flex items-center space-x-2 font-semibold">
                            <svg viewBox="0 0 24 24" fill="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
                                <path d="M12 17V11" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#1C274C" />
                            </svg>
                            <span>More info</span>
                        </button>
                    </div>

                    {/* Address */}
                    <p className='mt-4 text-sm'>{restaurant.address}
                        <span className='text-primary hover:underline font-semibold'> Open in Maps </span>
                    </p>



                </div>
            </div>
        </section>
    );
}

export default RestaurantInfoSection;
