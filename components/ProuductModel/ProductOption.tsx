import React from 'react';
import { Option } from '../../data/ProductsData';

interface ProductOptionProps {
  option: Option;
  selectedOptions: { [key: number]: string[] };
  onCheckboxChange: (optionId: number, selectedOption: string) => void;
  onRadioChange: (optionId: number, selectedOption: string) => void;
}

const ProductOption: React.FC<ProductOptionProps> = ({
  option,
  selectedOptions,
  onCheckboxChange,
  onRadioChange,
}) => {
  const isSelected = (optName: string) => selectedOptions[option.id]?.includes(optName);

  return (
    <div
      id={`option-${option.id}`} // Add an ID for scrolling
      className={`px-4 py-6 border relative transition-colors duration-200 border-gray-300 ${
        selectedOptions[option.id]?.length ? 'bg-secondary-lighter' : option.isRequired ? 'bg-primary-lighter' : 'bg-white'
      } rounded-xl shadow-sm`}
    >
      <h4 className="font-bold">
        {option.name}
        {selectedOptions[option.id]?.length ? (
          <span className="absolute top-6 right-4 bg-white border border-secondary-light text-black text-xs px-2 py-1 rounded-full">
            Complete
          </span>
        ) : option.isRequired ? (
          <span className="absolute top-6 right-4 bg-primary-dark text-white text-xs px-2 py-1 rounded-full">
            Required
          </span>
        ) : (
          <span className="absolute top-6 right-4 bg-secondary-medium text-black text-xs px-2 py-1 rounded-full">
            Optional
          </span>
        )}
      </h4>
      <div className="flex flex-col gap-4 mt-2 font-medium text-secondary-dark">
        {option.maxSelection === 1 ? (
          <div className="flex flex-col gap-2 my-2">
            {option.options.map((opt) => (
              <label
                key={opt.name}
                className={`group flex items-center gap-4 text-md cursor-pointer transition-colors duration-200 px-2 py-4 rounded-md ${
                  isSelected(opt.name) ? 'bg-secondary-lighter' : 'hover:bg-primary-light'
                }`}
                onClick={() => onRadioChange(option.id, opt.name)}
              >
                <input
                  type="radio"
                  name={`option-${option.id}`}
                  value={opt.name}
                  className="form-radio h-5 w-5 text-black border-gray-300 focus:ring-black"
                  checked={isSelected(opt.name)}
                  onChange={() => onRadioChange(option.id, opt.name)}
                />
                <div className="flex flex-row justify-between text-left w-full">
                  <div>{opt.name}</div>
                  <div>(+${opt.price})</div>
                </div>
              </label>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {option.options.map((opt) => (
              <label
                key={opt.name}
                className={`group flex items-center gap-4 text-md cursor-pointer transition-colors duration-200 w-full px-2 py-4 rounded-md ${
                  isSelected(opt.name) ? 'bg-gray-100' : 'hover:bg-primary-light'
                }`}
                onClick={() => onCheckboxChange(option.id, opt.name)} // Trigger change on row click
              >
                <input
                  type="checkbox"
                  checked={isSelected(opt.name)}
                  onChange={() => onCheckboxChange(option.id, opt.name)} // Keep the checkbox update logic
                  className="h-5 w-5 text-black border-gray-300 focus:ring-black transiton-all duration-300" // Add styles for the checkbox
                />
                <div className="flex flex-row justify-between text-left w-full">
                  <div>{opt.name}</div>
                  <div>(+${opt.price})</div>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductOption;
