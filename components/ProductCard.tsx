// components/ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/ProductsData';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Card
      key={product.id}
      onClick={onClick}
      className="relative flex border p-3 rounded-lg shadow h-[152px] transition-transform duration-100 hover:scale-105 hover:bg-primary-lighter"
    >
      {/* Content Section */}
      <CardContent className="flex flex-col justify-start flex-grow overflow-hidden mr-4 gap-1 p-0">
        <h2 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {product.heading}
        </h2>
        <p className="text-lg text-secondary-dark whitespace-nowrap overflow-hidden text-ellipsis">
          from Rs. {product.price}
        </p>
        <p className="text-secondary-dark overflow-hidden text-ellipsis line-clamp-2">
          {product.content}
        </p>
      </CardContent>

      {/* Image Section */}
      <div className="w-32 h-32 relative bg-secondary-light rounded-lg overflow-hidden flex items-center justify-center shrink-0">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.heading}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        ) : (
          <span className="text-sm text-secondary">No Image</span>
        )}
      </div>

      {/* Plus Sign Button */}
      <div className="absolute bottom-5 right-4">
        <button className="flex items-center justify-center bg-white text-black w-8 h-8 rounded-full hover:bg-secondary-lighter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
