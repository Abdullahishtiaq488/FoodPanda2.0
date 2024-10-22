// components/ProductsPage.tsx

"use client";

import React, { useState } from 'react';
import { products } from '../data/ProductsData';
import ProductList from './ProductList';
import ProductModal from './ProuductModel/ProductModal';

const ProductsPage: React.FC = () => {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const openModal = (product: typeof products[0]) => {
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
