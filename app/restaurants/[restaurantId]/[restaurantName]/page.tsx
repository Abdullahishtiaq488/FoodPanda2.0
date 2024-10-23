"use client"
import React from 'react';
import RestaurantDetailPage from '@/components/RestaurantDetailPage';
import { useParams } from 'next/navigation';

const RestaurantDetail = () => {
    const params = useParams();  // Get params from URL
    const { restaurantName } = params;

    // Ensure restaurantName is a string before processing
    if (typeof restaurantName !== 'string') {
        return <div>Restaurant not found</div>;
    }

    // Extract the restaurant ID from the restaurant name in the URL
    const restaurantId = restaurantName.toLowerCase().replace(/[\s-]+/g, '-').replace(/-+/g, '-');

    // If restaurantId doesn't exist in the restaurantMap, handle it gracefully
    if (!restaurantId) {
        return <div>Restaurant not found</div>;
    }

    return (
        <section>
            {/* Pass the restaurantId to RestaurantDetailPage */}
            <RestaurantDetailPage restaurantId={restaurantId} />
        </section>
    );
};

export default RestaurantDetail;
