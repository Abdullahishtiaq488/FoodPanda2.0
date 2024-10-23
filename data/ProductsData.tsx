// data/ProductsData.tsx
import productImage1 from "../public/summerdeal1.jpg"
import productImage2 from "../public/ChickenTeriyaki.jpg"
import productImage3 from "../public/chickentikka.jpg"
import productImage4 from "../public/ChickenFajita.jpg"

export interface Option {
  id: number;
  name: string;
  subtext?: string;
  isRequired: boolean;
  maxSelection: number; // 0 means unlimited selection, otherwise max number

  options: { name: string; price: number }[]; // Array of selectable options
}

export interface FallbackOptions {
  id: number;
  label: string;
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

// Sample product data
export const products: Product[] = [
  {
    id: 1,
    heading: 'Summer Deal 123',
    price: 77434,
    content: 'Chicken Sub & 345ml Drink',
    category: "Popular",
    image: productImage1,
    specialInstructions: 'Special requests are subject to the restaurant\'s approval. Tell us here!',
    fallbackOptions: [
      { id: 1, label: 'Remove it from my order' },
      { id: 2, label: 'Cancel the entire order' },
      { id: 3, label: 'Call me' },
    ],
    options: [
      {
        id: 1,
        name: 'Choose Your Sub',
        subtext: 'Select 1',
        isRequired: true,
        maxSelection: 1,
        options: [
          { name: 'Tikka', price: 0 },
          { name: 'BBQ', price: 0 },
          { name: 'Roasted Chicken Breast', price: 0 },
          { name: 'Chicken Chapli', price: 0 },
          { name: 'Onion', price: 0 },
          { name: 'Jalapeno', price: 0 },
          { name: 'Olives', price: 0 },
          { name: 'Tomato', price: 0 },
          { name: 'Lettuce', price: 0 },
          { name: 'Cucumber', price: 0 }, // Add more options for testing
          { name: 'Peppers', price: 0 },
        ],
      },
      {
        id: 2,
        name: 'Choose Your Bread',
        subtext: 'Select 1',
        isRequired: true,
        maxSelection: 1,
        options: [
          { name: 'Italian', price: 0 },
          { name: 'Parmesan Oregano', price: 0 },
          { name: 'Wheat', price: 0 },
          { name: 'Sesame', price: 0 },
          { name: 'Honey Oat', price: 0 },
        ],
      },
      {
        id: 3,
        name: 'Choose Your Cheese',
        subtext: 'Select 1',
        isRequired: true,
        maxSelection: 1,
        options: [{ name: 'Without Cheese', price: 0 }],
      },
      {
        id: 4,
        name: 'Choose Your Veggies',
        subtext: 'Select 1',
        isRequired: true,
        maxSelection: 7,
        options: [
          { name: 'Onion', price: 0 },
          { name: 'Jalapeno', price: 0 },
          { name: 'Olives', price: 0 },
          { name: 'Tomato', price: 0 },
          { name: 'Lettuce', price: 0 },
        ],
      },
      {
        id: 5,
        name: 'Choose Your Drink',
        subtext: 'Select 1',
        isRequired: true,
        maxSelection: 1,
        options: [
          { name: '7up Can - 250 ml', price: 0 },
          { name: 'Pepsi Can - 250 ml', price: 0 },
          { name: 'Mirinda Can - 250 ml', price: 0 },
          { name: 'Aquafina Water - 500 ml', price: 0 },
          { name: 'Diet Pepsi - 345 ml', price: 0 },
        ],
      },
      {
        id: 6,
        name: 'Frequently Bought Together',
        isRequired: false,
        maxSelection: 0,
        options: [
          { name: 'Pepsi - 345 ml', price: 120 },
          { name: '7up - 345 ml', price: 120 },
          { name: 'Pepsi Can - 250 ml', price: 120 },
        ],
      },
    ],
  },
  {
    id: 2,
    heading: 'Chicken Teriyaki',
    price: 724,
    category: "Popular",
    content: 'Let the flavor tickle your taste buds. Some savory-some sweet, smothered in a thick chicken teriyaki sauce and chicken teriyaki sub is simply YUM',
    image: productImage2,
  },
  {
    id: 3,
    heading: 'Chicken Tikka',
    price: 676,
    category: "Popular",
    content: 'The all-time favorite chicken Tikka sub. Its classic! Customize it with whatever cheese or veggies you want and have a flavor blast',
    image: productImage3,
  },
  {
    id: 4,
    heading: 'Chicken Fajita',
    price: 676,
    category: "Exclusive Discounted",
    content: 'Spicy tender chicken Fajita and desified to appeal the chicken lovers all around. Stuffed with your favorite vegetables, sauces and voila! A local delight',
    image: productImage4,
  },
  {
    id: 5,
    heading: 'Chicken Fajita Salad',
    price: 728,
    category: "Platter",
    content: 'Juicy bites of delish chicken added on top of a healthy and full of vitamins vegetables of your choice',
    image: productImage1,
  },
  {
    id: 6,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Salads",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  }, {
    id: 7,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Salads",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  }, {
    id: 8,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Favorite Subs",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },

  {
    id: 9,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Favorite Subs",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },

  {
    id: 10,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Subs (6 inch)",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },

  {
    id: 11,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Toastie",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },
  {
    id: 12,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Extras",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },
  {
    id: 13,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Popular",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },
  {
    id: 14,
    heading: 'Roasted Chicken Breast',
    price: 608,
    category: "Cookies & Chips",
    content: 'Tender chicken patty on freshly baked bread... now that’s tempting to the max',
    image: productImage2,
  },
 
];
