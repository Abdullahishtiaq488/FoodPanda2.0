import React, { useState } from 'react';
import Modal from '../Modaldialogue';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '../ui/button';
import ProductOptions from './ProductOptions'; // Import ProductOptions component
import { Product } from '../../data/ProductsData'; // Import Product type

interface ProductModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  selectedProduct: Product | null; // Updated to include the Product type
}

const ProductModal: React.FC<ProductModalProps> = ({ isModalOpen, closeModal, selectedProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [isScaling, setIsScaling] = useState(false);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    triggerScaleEffect();
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      triggerScaleEffect();
    }
  };

  const triggerScaleEffect = () => {
    setIsScaling(true);
    setTimeout(() => {
      setIsScaling(false);
    }, 100); // Animation duration in milliseconds
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {selectedProduct && (
        <div className="flex flex-col h-full justify-between">
          <div className="overflow-y-auto">
            {/* Image Section */}
            <div className="w-full h-[205px] md:h-[317px] relative bg-gray-200 overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.heading}
                layout='fill'
                objectFit="cover"
              />
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-grow p-4">
              <div className='flex flex-col gap-4'>
              <h2 className="text-2xl font-bold">{selectedProduct.heading}</h2>
              <h3 className="text-lg font-bold text-primary-dark">Rs. {selectedProduct.price}</h3>
              <p>{selectedProduct.content}</p></div>

              <hr className='w-full my-4' />

              {/* Render Product Options */}
              <ProductOptions product={selectedProduct} />
            </div>
          </div>

          {/* Fixed Footer Section */}
          <div className="flex items-center p-4 border-t">
            {/* Quantity Section */}
            <div className="flex items-center w-1/4 md:w-1/6 justify-between px-0 md:px-2">
              <button
                onClick={handleDecrease}
                className={clsx(
                  'flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondary-light',
                  quantity === 0 ? 'bg-secondary-light cursor-not-allowed opacity-50' : 'bg-secondary-light'
                )}
                disabled={quantity === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>

              <span
                className={clsx(
                  'mx-2 text-center text-sm font-semibold transition-transform duration-150 transform text-secondary-dark',
                  isScaling ? 'scale-125' : 'scale-100'
                )}
              >
                {quantity}
              </span>

              <button
                onClick={handleIncrease}
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
              >
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

            {/* Add to Cart Button */}
            <Button className="w-4/5 p-2 ml-2 text-white bg-secondary-medium rounded">
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProductModal;
