// /restaurants/[cityid]/[restaurantName]/page.tsx

"use client"
import React from 'react';
import RestaurantDetailPage from '@/components/RestaurantDetailPage';
import { restaurantData } from '@/data/cardData';
import { useParams } from 'next/navigation';

const RestaurantDetail = () => {
    const params = useParams();  // Get params from URL
    const { restaurantName } = params;

    // Find the restaurant by matching the restaurant name (case-insensitive)
    const restaurant = restaurantData.find((r) =>
        r.name.toLowerCase().replace(/[\s-]+/g, '-').replace(/-+/g, '-') === restaurantName
    );


    // Handle the case where no restaurant is found
    if (!restaurant) {
        return <div>Restaurant not found</div>;
    }

    return (
        <section>
            {/* Pass the found restaurant to RestaurantDetailPage */}
            <RestaurantDetailPage restaurant={restaurant} />
        </section>
    );
};

export default RestaurantDetail;
