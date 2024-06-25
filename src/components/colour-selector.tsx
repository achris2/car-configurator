import * as React from "react";
import { Button } from "@/components/ui/button";

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColourSelector: React.FC<ColorSelectorProps> = ({ selectedColor, onColorChange }) => {
  const colors = ["red", "white", "black"];

  return (
    <div className="w-full">
      <h3 className="text-xl mb-2 text-center">Choose Color</h3>
      <div className="flex justify-center space-x-2">
        {colors.map((color) => (
          <Button 
            key={color} 
            onClick={() => onColorChange(color)}
            className={color === selectedColor ? "bg-gray-300" : ""}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ColourSelector;