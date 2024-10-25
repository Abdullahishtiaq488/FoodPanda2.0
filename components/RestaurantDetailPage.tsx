// components/RestaurantDetailPage.tsx
"use client";
import React, {useEffect, useState} from 'react';
import { restaurantMap } from '@/data/restaurants';
import { RestaurantData } from '@/types/ProductTypes';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';
import { cityData } from '@/data/city/cityData';
import RestaurantInfoSection from './RestaurantInfoSection';
import AvailableDeals from './AvailableDeals';
import NavStrip from './NavStrip';
import ProductsPage from './ProductsPage';

interface RestaurantLayoutProps {
    restaurant_id: string; // Renamed to snake_case
}

const RestaurantDetailPage: React.FC<RestaurantLayoutProps> = ({ restaurant_id }) => {
    const [restaurant, setRestaurant] = useState<RestaurantData | null>(null);

    useEffect(() => {
        const loadRestaurantData = async () => {
            if (restaurantMap[restaurant_id]) {
                const module = await restaurantMap[restaurant_id]();
                setRestaurant(module.default);
            } else {
                console.error(`No data found for restaurant: ${restaurant_id}`);
            }
        };

        loadRestaurantData();
    }, [restaurant_id]);

    if (!restaurant) {
        return <div className='min-h-[100vh]'>Loading...</div>;
    }

    // Move city finding inside the condition where restaurant exists
    const city = cityData.find(city => city.id === restaurant.city_id);

    return (
        <section >

            <div className="py-0 px-4 md:px-16 text-gray-500 ">

                {/* Breadcrumbs */}
                <Breadcrumbs restaurant={restaurant} city={city}/>

                {/* Main Content */}
                <RestaurantInfoSection restaurant={restaurant} />

                <hr className='-mx-4 md:-mx-16 bg-gray-600' />

                {/* Available Deals Section */}
                <AvailableDeals restaurant={restaurant} />
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
