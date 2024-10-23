// components/ProductsPage.tsx

"use client";

import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProuductModel/ProductModal';
import { ProductsPageProps } from '../types/ProductTypes';



const ProductsPage: React.FC<ProductsPageProps> = ({ restaurant }) => {
  // Group products by category
  const groupedProducts = restaurant.products.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof restaurant.products>);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof restaurant.products[0] | null>(null);

  const openModal = (product: typeof restaurant.products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="">
      <div className="flex-1">
        <ProductList groupedProducts={groupedProducts} openModal={openModal} />
        <ProductModal isModalOpen={isModalOpen} closeModal={closeModal} selectedProduct={selectedProduct} />
      </div>
    </section>
  );
};

export default ProductsPage;
