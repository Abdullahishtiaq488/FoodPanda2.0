// types.ts
import { ImageProps } from 'next/image'; // If using Next.js for images

// Interface for Deals
export interface Deal {
    heading: string;
    description: string;
}


// Interface for Restaurant Data
export interface RestaurantData {
    id: number;
    cityId: number;
    name: string;
    image: any; // Change to appropriate type if using a different method for images
    logo: any; // Change to appropriate type if using a different method for images
    cuisine: string;
    tags: string[];
    rating: number;
    address: string;
    deals: Deal[];
    closed?: boolean;
}

// Interface for Product Options
export interface Option {
    id: number;
    name: string;
    subtext?: string;
    isRequired: boolean;
    maxSelection: number; // 0 means unlimited selection
    options: { name: string; price: number }[];
}

// Interface for Fallback Options
export interface FallbackOptions {
    id: number;
    label: string;
}

// Interface for Product Data
export interface RestaurantData {
    id: number;
    cityId: number;
    name: string;
    image: any;
    logo: any;
    cuisine: string;
    tags: string[];
    rating: number;
    address: string;
    deals: Deal[];
    closed?: boolean;
    products: Product[]; // Link products to the restaurant
}


// Define the props for ProductsPage
export interface ProductsPageProps {
    restaurant: RestaurantData; // Use RestaurantData type directly
}

export interface Product {
    id: number;
    heading: string;
    price: number;
    content: string;
    category?: string;
    image: any;
    specialInstructions?: string;
    fallbackOptions?: FallbackOptions[];
    options?: Option[]; // Array of option groups for customizations
}