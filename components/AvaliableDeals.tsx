"use client";
import React, { useRef } from 'react';

interface Deal {
    heading: string;
    description: string;
}

interface Restaurant {
    deals: Deal[];
}

interface RestaurantLayoutProps {
    restaurant: Restaurant;
}

const AvailableDeals: React.FC<RestaurantLayoutProps> = ({ restaurant }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        const scrollDistance = 300; // Adjust scroll distance as needed
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'right' ? scrollDistance : -scrollDistance,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold text-black mb-4">Available Deals</h2>
            <div className="relative w-full overflow-hidden">
                <div
                    ref={scrollContainerRef}
                    className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {restaurant.deals.slice(0, 3).map((deal, index) => (
                        <div
                        key={index}
                        className="p-4 border rounded-lg shadow-md bg-white w-64 min-w-[16rem] hover:bg-pink-100 transition-all duration-300"
                    >
                        <div className="flex items-center gap-2 mb-2"> {/* Flex container for SVG and h3 */}
                        <svg viewBox="0 0 24 24" className='w-5 h-5' fill="#e91e63"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.5289 10.8689L20.0089 9.34891C19.7489 9.08891 19.5389 8.57891 19.5389 8.21891V6.05891C19.5389 5.17891 18.8189 4.45891 17.9389 4.45891H15.7889C15.4289 4.45891 14.9189 4.24891 14.6589 3.98891L13.1389 2.46891C12.5189 1.84891 11.4989 1.84891 10.8789 2.46891L9.33891 3.98891C9.08891 4.24891 8.57891 4.45891 8.20891 4.45891H6.05891C5.17891 4.45891 4.45891 5.17891 4.45891 6.05891V8.20891C4.45891 8.56891 4.24891 9.07891 3.98891 9.33891L2.46891 10.8589C1.84891 11.4789 1.84891 12.4989 2.46891 13.1189L3.98891 14.6389C4.24891 14.8989 4.45891 15.4089 4.45891 15.7689V17.9189C4.45891 18.7989 5.17891 19.5189 6.05891 19.5189H8.20891C8.56891 19.5189 9.07891 19.7289 9.33891 19.9889L10.8589 21.5089C11.4789 22.1289 12.4989 22.1289 13.1189 21.5089L14.6389 19.9889C14.8989 19.7289 15.4089 19.5189 15.7689 19.5189H17.9189C18.7989 19.5189 19.5189 18.7989 19.5189 17.9189V15.7689C19.5189 15.4089 19.7289 14.8989 19.9889 14.6389L21.5089 13.1189C22.1589 12.5089 22.1589 11.4889 21.5289 10.8689ZM7.99891 8.99891C7.99891 8.44891 8.44891 7.99891 8.99891 7.99891C9.54891 7.99891 9.99891 8.44891 9.99891 8.99891C9.99891 9.54891 9.55891 9.99891 8.99891 9.99891C8.44891 9.99891 7.99891 9.54891 7.99891 8.99891ZM9.52891 15.5289C9.37891 15.6789 9.18891 15.7489 8.99891 15.7489C8.80891 15.7489 8.61891 15.6789 8.46891 15.5289C8.17891 15.2389 8.17891 14.7589 8.46891 14.4689L14.4689 8.46891C14.7589 8.17891 15.2389 8.17891 15.5289 8.46891C15.8189 8.75891 15.8189 9.23891 15.5289 9.52891L9.52891 15.5289ZM14.9989 15.9989C14.4389 15.9989 13.9889 15.5489 13.9889 14.9989C13.9889 14.4489 14.4389 13.9989 14.9889 13.9989C15.5389 13.9989 15.9889 14.4489 15.9889 14.9989C15.9889 15.5489 15.5489 15.9989 14.9989 15.9989Z" ></path> </g></svg>
                            <h3 className="font-semibold text-primary text-sm">{deal.heading}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{deal.description}</p>
                    </div>
                    
                    ))}
                </div>

                {/* Left Scroll Button */}
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center border border-gray-300 bg-white text-black p-2 rounded-full sm:hidden transition-all duration-200 hover:p-3 hover:-mx-1 hover:bg-gray-200"
                >
                    <svg fill="#000000" viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.532,14.508l20.967,-0.008c0.828,0 1.501,0.672 1.501,1.499c0,0.828 -0.672,1.501 -1.499,1.501l-21.125,0.009c0.107,0.159 0.234,0.306 0.377,0.439c3.787,3.502 9.68,8.951 9.68,8.951c0.608,0.562 0.645,1.511 0.083,2.119c-0.562,0.608 -1.512,0.645 -2.12,0.083c0,0 -5.892,-5.448 -9.68,-8.95c-1.112,-1.029 -1.751,-2.47 -1.766,-3.985c-0.014,-1.515 0.596,-2.968 1.688,-4.018l9.591,-9.221c0.596,-0.574 1.547,-0.556 2.121,0.041c0.573,0.597 0.555,1.547 -0.042,2.121l-9.591,9.221c-0.065,0.063 -0.127,0.129 -0.185,0.198Z" />
                    </svg>
                </button>

                {/* Right Scroll Button */}
                <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center border border-gray-300 bg-white text-black p-2 rounded-full sm:hidden transition-all duration-200 hover:p-3 hover:-mx-1 hover:bg-gray-200"
                >
                    <svg fill="#000000" viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.468,14.508l-20.967,-0.008c-0.828,0 -1.501,0.672 -1.501,1.499c0,0.828 0.672,1.501 1.499,1.501l21.125,0.009c-0.107,0.159 -0.234,0.306 -0.377,0.439c-3.787,3.502 -9.68,8.951 -9.68,8.951c-0.608,0.562 -0.645,1.511 -0.083,2.119c0.562,0.608 1.512,0.645 2.12,0.083c0,0 5.892,-5.448 9.68,-8.95c1.112,-1.029 1.751,-2.47 1.766,-3.985c0.014,-1.515 -0.596,-2.968 -1.688,-4.018l-9.591,-9.221c-0.596,-0.574 -1.547,-0.556 -2.121,0.041c-0.573,0.597 -0.555,1.547 0.042,2.121l9.591,9.221c0.065,0.063 0.127,0.129 0.185,0.198Z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default AvailableDeals;
