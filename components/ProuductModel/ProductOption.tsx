import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'; // Using shadcn RadioGroup and RadioGroupItem
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
  const [isOpen, setIsOpen] = useState(false);
  const [viewMoreVisible, setViewMoreVisible] = useState(true);

  const handleViewMoreClick = () => {
    setIsOpen(true);
    setViewMoreVisible(false); // Hide the button after clicking
  };

  const isSelected = (optName: string) => selectedOptions[option.id]?.includes(optName);

  return (
    <div
      className={`px-4 py-6 border relative transition-colors duration-200 border-gray-300 ${
        selectedOptions[option.id]?.length ? 'bg-gray-100' : option.isRequired ? 'bg-primary-lighter' : 'bg-white'
      } rounded-xl shadow-sm`}
    >
      <h4 className="font-bold">
        {option.name}
        {selectedOptions[option.id]?.length ? (
          <span className="absolute top-6 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
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
          <RadioGroup
            value={selectedOptions[option.id]?.[0]} // Control the selected radio item
            onValueChange={(value) => onRadioChange(option.id, value)} // Trigger on value change
            className="flex flex-col gap-2"
          >
            {option.options.slice(0, 5).map((opt) => (
              <div
                key={opt.name}
                className={`group flex items-center gap-4 text-md cursor-pointer transition-colors duration-200 px-2 py-4 rounded-md ${
                  isSelected(opt.name) ? 'bg-secondary-lighter' : 'hover:bg-primary-light'
                }`}
              >
                <RadioGroupItem
                  value={opt.name}
                  id={`option-${option.id}-${opt.name}`} // Unique ID for each radio button
                  className={`form-radio w-5 h-5 border-2 border-black transition-transform duration-200 focus:outline-none 
                    ${isSelected(opt.name) ? 'border-4 bg-white' : 'group-hover:border-4'}`}
                />
                <label htmlFor={`option-${option.id}-${opt.name}`}>
                  {opt.name} (+${opt.price})
                </label>
              </div>
            ))}

            {option.options.length > 5 && (
              <div>
                {viewMoreVisible && (
                  <button
                    type="button"
                    onClick={handleViewMoreClick}
                    className="absolute bottom-1 left-4 bg-transparent text-secondary rounded-md px-2 py-1 text-sm transition-colors hover:bg-secondary-light focus:outline-none flex justify-between"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down w-5 h-5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>{' '}
                    View More
                  </button>
                )}
                {isOpen && (
                  <div className="flex flex-col gap-2">
                    {option.options.slice(5).map((opt) => (
                      <div
                        key={opt.name}
                        className={`group flex items-center gap-4 text-sm cursor-pointer transition-colors duration-200 px-2 py-4 rounded-md ${
                          isSelected(opt.name) ? 'bg-gray-100' : 'hover:bg-primary-light'
                        }`}
                      >
                        <RadioGroupItem
                          value={opt.name}
                          id={`option-${option.id}-${opt.name}`} // Unique ID for each radio button
                          className={`form-radio w-5 h-5 border-2 border-black transition-transform duration-200 focus:outline-none 
                            ${isSelected(opt.name) ? 'border-4 bg-white' : 'group-hover:border-4'}`}
                        />
                        <label htmlFor={`option-${option.id}-${opt.name}`}>
                          {opt.name} (+${opt.price})
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </RadioGroup>
        ) : (
          <>
            {option.options.slice(0, 5).map((opt) => (
              <label
                key={opt.name}
                className={`group flex items-center gap-4 text-md cursor-pointer transition-colors duration-200 px-2 py-4 rounded-md ${
                  isSelected(opt.name) ? 'bg-gray-100' : 'hover:bg-primary-light'
                }`}
              >
                <Checkbox
                  checked={isSelected(opt.name)} // Check if selected
                  onChange={() => onCheckboxChange(option.id, opt.name)} // Update selected options
                />
                <span>
                  {opt.name} (+${opt.price})
                </span>
              </label>
            ))}
            {option.options.length > 5 && (
              <div>
                {viewMoreVisible && (
                  <button
                    type="button"
                    onClick={handleViewMoreClick}
                    className="absolute bottom-0 left-0 bg-transparent text-gray-600 rounded-md px-2 py-1 text-sm transition-colors hover:bg-blue-600 focus:outline-none flex justify-between"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down w-5 h-5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>{' '}
                    View More
                  </button>
                )}
                {isOpen && (
                  <div className="flex flex-col gap-2 mt-1">
                    {option.options.slice(5).map((opt) => (
                      <label
                        key={opt.name}
                        className={`group flex items-center gap-2 text-sm cursor-pointer transition-colors duration-200 ${
                          isSelected(opt.name) ? 'bg-gray-100' : 'hover:bg-pink-300'
                        }`}
                      >
                        <Checkbox
                          checked={isSelected(opt.name)} // Check if selected
                          onChange={() => onCheckboxChange(option.id, opt.name)} // Update selected options
                        />
                        <span>
                          {opt.name} (+${opt.price})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductOption;
