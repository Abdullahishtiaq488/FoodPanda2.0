import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface FallbackOption {
    id: number;
    label: string;
  }  

interface FallbackOptionsProps {
  fallbackOptions: FallbackOption[]; // Correct type for the options array
  fallbackSelection: number | undefined;
  setFallbackSelection: (selection: number) => void;
}

const FallbackOptions: React.FC<FallbackOptionsProps> = ({
  fallbackOptions,
  fallbackSelection,
  setFallbackSelection,
}) => (
  <div className="my-4">
    <h4 className="font-bold">If this item is not available</h4>
    <Select
      value={fallbackSelection !== undefined ? fallbackSelection.toString() : ""}
      onValueChange={(value) => setFallbackSelection(Number(value))}
    >
      <SelectTrigger className="w-full mt-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {fallbackOptions.map((fallback: FallbackOption) => (
          <SelectItem key={fallback.id} value={fallback.id.toString()}>
            {fallback.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default FallbackOptions;
