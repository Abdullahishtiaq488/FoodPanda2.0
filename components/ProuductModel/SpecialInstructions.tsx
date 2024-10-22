import React from 'react';
import { Textarea } from "@/components/ui/textarea";

interface SpecialInstructionsProps {
  instructions: string;
  specialRequest: string;
  setSpecialRequest: (request: string) => void;
}

const SpecialInstructions: React.FC<SpecialInstructionsProps> = ({ instructions, specialRequest, setSpecialRequest }) => (
  <div className="my-4">
    <label className="block text-sm font-medium text-gray-700">
      {instructions}
    </label>
    <Textarea
      value={specialRequest}
      onChange={(e) => setSpecialRequest(e.target.value)}
      placeholder="Any special requests..."
      className="mt-1"
    />
  </div>
);

export default SpecialInstructions;
