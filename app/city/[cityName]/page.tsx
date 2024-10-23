// app/city/[cityName]/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { restaurantMap } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';
import Link from 'next/link';

const CityPage = ({ params }: { params: { cityName: string } }) => {
    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRestaurants = async () => {
            const restaurantDataPromises = Object.keys(restaurantMap).map(async (key) => {
                const restaurantData = await restaurantMap[key]();
                return restaurantData.default; // Assuming default export
            });

            const restaurantData = await Promise.all(restaurantDataPromises);
            setRestaurants(restaurantData);
            setLoading(false);
        };

        loadRestaurants();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {restaurants.map((restaurant) => {
                const restaurantName = restaurant.name || "Unnamed Restaurant"; // Fallback name
                return (
                    <Link
                        href={`/restaurants/${restaurant.id}/${restaurantName.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')}`}
                        key={restaurant.id}
                    >
                        <RestaurantCard
                            image={restaurant.image}
                            name={restaurantName}
                            cuisine={restaurant.cuisine}
                            closed={restaurant.closed} // You can set this based on your logic
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default CityPage;
