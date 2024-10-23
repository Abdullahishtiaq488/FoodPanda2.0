// components/RestaurantDetailPage.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { restaurantMap } from '../data/restaurants'; // Import the restaurant map
import { RestaurantData } from '../types/ProductTypes';
import NavStrip from './NavStrip';
import ProductsPage from './ProductsPage';
import AvaliableDeals from './AvaliableDeals';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';
import RestaurantInfoSection from './RestaurantInfoSection';

// Define the props type for the RestaurantLayout component
interface RestaurantLayoutProps {
    restaurantId: string; // Get restaurantId from the route or props
}

const RestaurantDetailPage: React.FC<RestaurantLayoutProps> = ({ restaurantId }) => {
    const [restaurant, setRestaurant] = useState<RestaurantData | null>(null);

    useEffect(() => {
        // Load the restaurant data dynamically based on the restaurantId
        const loadRestaurantData = async () => {
            if (restaurantMap[restaurantId]) {
                const module = await restaurantMap[restaurantId]();
                setRestaurant(module.default); // Assuming the default export is the data
            } else {
                console.error(`No data found for restaurant: ${restaurantId}`);
            }
        };

        loadRestaurantData();
    }, [restaurantId]);

    if (!restaurant) {
        return <div className='min-h-[100vh]'>Loading...</div>;
    }

    return (
        <section >

            <div className="py-0 px-4 md:px-16 text-gray-500 ">

                {/* Breadcrumbs */}
                <Breadcrumbs restaurant={restaurant} />

                {/* Main Content */}
                <RestaurantInfoSection restaurant={restaurant} />

                <hr className='-mx-4 md:-mx-16 bg-gray-600' />

                {/* Available Deals Section */}
                <AvaliableDeals restaurant={restaurant} />
            </div>


            <div className='sticky top-[64px] py-0 px-0 md:px-16 shadow-lg z-20 bg-white'>
                <NavStrip restaurant={restaurant} />
            </div>

            {/* Products Page and Cart is side by side */}
            <div className="flex py-0 px-4 md:px-8 lg:px-16 relative gap-4 md:gap-6">
                <div>
                    <ProductsPage restaurant={restaurant} />
                </div>
                <div className="hidden sticky top-[140px] w-[350px] h-[calc(100vh-140px)] overflow-hidden md:flex items-start justify-end shrink-0">
                    <Cart />
                </div>
            </div>


            <div className='h-[700px] w-full'></div>
        </section>
    );
};

export default RestaurantDetailPage;
