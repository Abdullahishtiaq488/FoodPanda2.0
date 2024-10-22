import React, { useState, useEffect } from 'react';
import { Option, Product } from '../../data/ProductsData';

import FallbackOptions from './FallbackOptions';
import SpecialInstructions from './SpecialInstructions';
import ProductOption from './ProductOption';

interface ProductOptionsProps {
  product: Product;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string[] }>({});
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [fallbackSelection, setFallbackSelection] = useState<number | undefined>(undefined);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const isAnyOptionSelected = Object.values(selectedOptions).some(option => option.length > 0);
    setIsButtonVisible(isAnyOptionSelected || specialRequest.trim() !== '');
  }, [selectedOptions, specialRequest]);

  const handleCheckboxChange = (optionId: number, selectedOption: string) => {
    setSelectedOptions((prev) => {
      const currentSelections = prev[optionId] || [];
      if (currentSelections.includes(selectedOption)) {
        return {
          ...prev,
          [optionId]: currentSelections.filter((item) => item !== selectedOption),
        };
      } else {
        const option = product.options?.find((opt) => opt.id === optionId);
        if (option && option.maxSelection !== 0 && currentSelections.length >= option.maxSelection) {
          return prev; // Prevent more selections than allowed
        }
        return {
          ...prev,
          [optionId]: [...currentSelections, selectedOption],
        };
      }
    });
  };

  const handleRadioChange = (optionId: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionId]: [event.target.value],
    });
  };

  return (
    <section>
      <div className="my-2 flex flex-col gap-4">
        {product.options?.map((option: Option) => (
          <ProductOption
            key={option.id}
            option={option}
            selectedOptions={selectedOptions}
            onCheckboxChange={handleCheckboxChange}
            onRadioChange={handleRadioChange}
          />
        ))}
      </div>

      {/* Special Instructions */}
      {product.specialInstructions && (
        <SpecialInstructions
          instructions={product.specialInstructions}
          specialRequest={specialRequest}
          setSpecialRequest={setSpecialRequest}
        />
      )}

      {/* Fallback Options */}
      {product.fallbackOptions && (
        <FallbackOptions
          fallbackOptions={product.fallbackOptions} // Ensure this is of type FallbackOption[]
          fallbackSelection={fallbackSelection}
          setFallbackSelection={setFallbackSelection}
        />
      )}
    </section>
  );
};

export default ProductOptions;
