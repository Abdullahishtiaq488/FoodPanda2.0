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
      const updatedSelections = currentSelections.includes(selectedOption)
        ? currentSelections.filter((item) => item !== selectedOption)
        : [...currentSelections, selectedOption];

      return { ...prev, [optionId]: updatedSelections };
    });

    // Scroll to the next option
    scrollToNextOption(optionId);
  };

  const handleRadioChange = (optionId: number, value: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionId]: [value],
    });

    // Scroll to the next option
    scrollToNextOption(optionId);
  };

  const scrollToNextOption = (currentOptionId: number) => {
    const options = product.options || [];
    const currentIndex = options.findIndex(option => option.id === currentOptionId);
    const nextOption = options[currentIndex + 1];

    if (nextOption) {
      const nextOptionElement = document.getElementById(`option-${nextOption.id}`);
      if (nextOptionElement) {
        nextOptionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
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
        )) || null}
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
          fallbackOptions={product.fallbackOptions}
          fallbackSelection={fallbackSelection}
          setFallbackSelection={setFallbackSelection}
        />
      )}
    </section>
  );
};

export default ProductOptions;
