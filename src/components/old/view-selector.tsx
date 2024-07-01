import * as React from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react"; 

interface ViewSelectorProps {
  selectedView: number;
  onViewChange: (view: number) => void;
}

const ViewSelector: React.FC<ViewSelectorProps> = ({ selectedView, onViewChange }) => {
  const views = [0, 2]; // Array with only views 0 and 2

  return (
    <div className="w-full">
      <h3 className="text-md mb-2 font-medium text-center">Viewing Positions</h3>
      <div className="flex justify-center space-x-2">
        {views.map((view) => (
          <Button 
            key={view} 
            onClick={() => onViewChange(view)}
            className={view === selectedView ? "text-foreground" : ""}
          >
            {view === 0 && <MoveLeft className="w-4 h-4" />}
            {view === 2 && <MoveRight className="w-4 h-4" />}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ViewSelector;
