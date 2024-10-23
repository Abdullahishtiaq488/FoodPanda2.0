import React from 'react';
import { RestaurantData } from '@/types/ProductTypes';
import Image from 'next/image';

const RestaurantCard: React.FC<Partial<RestaurantData>> = ({ image, name, cuisine, closed }) => {
    return (
        <div className="relative border border-gray-300 rounded-lg overflow-hidden shadow-md w-full h-full">
            <div className="relative overflow-hidden group">
                <div className='transition-transform w-full h-48 duration-500 ease-in-out group-hover:scale-105'>
                    <Image
                        layout='fill'
                        src={image}
                        alt={"hii"} // Changed to use name for better accessibility
                        className="object-cover"
                    />
                    <div className={`absolute inset-0 ${closed ? 'bg-black/70' : 'bg-gradient-to-t from-black/30 to-transparent'}`}></div>
                </div>

                {closed && (
                    <div className="absolute inset-0 flex text-center flex-col justify-center items-center text-white z-10 group text-lg p-2">
                        <h3 className="font-semibold mb-2">We are closed</h3>
                        <button className="text-pink-500 bg-white border border-transparent px-2 py-1 rounded-lg mt-2 outline-white text-sm transition-all duration-100 ease-in-out hover:outline hover:outline-3">
                            Order for Later
                        </button>
                    </div>
                )}
            </div>

            <div className="px-4 py-2">
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold mb-2 truncate max-w-[70%]">{name}</h3>
                    <div className="flex items-center text-sm whitespace-nowrap">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 mr-1 text-yellow-300"
                            stroke="orange"
                            strokeWidth="3"
                        >
                            <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="text-black">4.9 (777)</span>
                    </div>
                </div>
                <p className="text-gray-600 text-sm">{cuisine}</p>
            </div>

            {!closed && (
                <>
                    <div className="absolute top-3 left-3 space-y-1 z-10">
                        <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis block">
                            Upto 10% Off
                        </span>
                        <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded max-w-[140px] overflow-hidden whitespace-nowrap text-ellipsis block">
                            Welcome Gift free delivery in Lahore
                        </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1 hover:scale-110 hover:bg-gray-100 transition-transform duration-200 z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </>
            )}
        </div>
    );
};

export default RestaurantCard;
