import React from 'react';
import { RestaurantData } from '../data/cardData';
import { cityData } from '../data/cardData';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbsProps {
    restaurant: RestaurantData;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ restaurant }) => {
    // Find the corresponding city data based on the restaurant's cityId
    const city = cityData.find(city => city.id === restaurant.cityId);

    return (
        <section className='mt-4'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink 
                            href="/"  // Link to the homepage
                            className="font-semibold underline relative group"
                        >
                            Homepage
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink 
                            href={`/city/${city?.cityName.toLowerCase()}`} // Dynamic link to the current city page
                            className="font-semibold underline relative group"
                        >
                            {city?.cityName || 'City'} {/* Use city name dynamically */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold">{restaurant.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    );
}

export default Breadcrumbs;
