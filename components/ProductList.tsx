// components/ProductList.tsx

import React from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
    groupedProducts: Record<string, any[]>;
    openModal: (product: any) => void;
}

const ProductList: React.FC<ProductListProps> = ({ groupedProducts, openModal }) => {
    return (
        <>
            {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                <div key={category} className="mb-8 ">
                    {category === 'Popular' ? (
                        <>
                            <h1 id={category} className="text-2xl font-bold mb-4 flex items-center">
                                <svg
                                    fill="#ffbb00"
                                    className="w-5 h-5 mr-1"
                                    viewBox="-64 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#ffbb00"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path>
                                    </g>
                                </svg>
                                <span>{category}</span>
                            </h1>
                            <p className="text-gray-500">Most ordered in {category} right now.</p>
                        </>
                    ) : (
                        <h1 id={category} className="text-2xl font-bold mb-4">{category}</h1>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                        {categoryProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductList;
