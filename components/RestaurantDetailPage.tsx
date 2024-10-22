// components/RestaurantLayout.tsx

import React from 'react';
import { CityData, RestaurantData } from '../data/cardData';
import NavStrip from './NavStrip';
import ProductsPage from './ProductsPage';
import AvaliableDeals from './AvaliableDeals';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';
import RestaurantInfoSection from './RestaurantInfoSection';

// Define the props type for the RestaurantLayout component
interface RestaurantLayoutProps {
    restaurant: RestaurantData;
}

const RestaurantDetailPage: React.FC<RestaurantLayoutProps> = ({ restaurant }) => {
    return (
        <section >
            <div className="py-0 px-4 md:px-16 text-gray-500">


                {/* Breadcrumbs */}


                <Breadcrumbs restaurant={restaurant}  />

                {/* Main Content */}

                <RestaurantInfoSection restaurant={restaurant} />

                <hr className='-mx-4 md:-mx-16 bg-gray-600' />

                {/* Available Deals Section */}
                <AvaliableDeals restaurant={restaurant} />
            </div>
            <div className='sticky top-0 py-0 px-0 md:px-16 shadow-lg z-20 bg-white'>
                <NavStrip />
            </div>

            {/* Products Page and Cart is side by side */}

            <div className="flex py-0 px-4 md:px-8 lg:px-16 relative gap-4 md:gap-6">
                <div >
                    <ProductsPage />
                </div>
                <div className="hidden sticky top-[70px] w-[350px] h-[calc(100vh-70px)] overflow-hidden md:flex items-start justify-end shrink-0">
                    <Cart />
                </div>
            </div>

            <div className='h-[700px] w-full'>

            </div>
        </section>


    );
};

export default RestaurantDetailPage;
