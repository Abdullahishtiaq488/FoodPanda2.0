"use client";
import React from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurantData, cityData } from '@/data/cardData';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const CityPage = () => {
    // Get the cityName from the dynamic route using useParams
    const params = useParams();
    const cityName = params.cityName;

    // Find the corresponding city data based on the cityName from the URL
    const city = cityData.find(city => city.cityName.toLowerCase() === cityName);

    // If the city doesn't exist, display a message
    if (!city) {
        return <div className="p-4 md:p-8">City not found.</div>;
    }

    // Filter restaurants based on the city's ID
    const filteredRestaurants = restaurantData.filter(restaurant => restaurant.cityId === city.id);

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-4">Restaurants in {city.cityName}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        href={`/restaurants/${restaurant.id}/${restaurant.name.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')}`}
                        key={restaurant.id}
                    >
                        <RestaurantCard
                            id={restaurant.id}
                            cityId={restaurant.cityId}
                            image={restaurant.image}
                            logo={restaurant.logo}
                            name={restaurant.name}
                            cuisine={restaurant.cuisine}
                            address={restaurant.address}
                            deals={restaurant.deals}
                            rating={restaurant.rating}
                            tags={restaurant.tags}
                            closed={restaurant.closed}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CityPage;
