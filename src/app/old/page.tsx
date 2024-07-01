"use client"

import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";

// import components 
import ColourSelector from "@/components/old/colour-selector";
import ViewSelector from "@/components/old/view-selector";

// import car images
import red1 from "../../../public/911/red/gt3-red1-wheel1.webp";
import red2 from "../../../public/911/red/gt3-red2-wheel1.webp";
import red3 from "../../../public/911/red/gt3-red3-wheel1.webp";
import white1 from "../../../public/911/white/gt3-white1-wheel1.webp";
import WsComponent from "@/components/ws-component";

const carImages = {
  red: [red1, red2, red3],
  white: [white1,], 
};
const Home: React.FC = () => {
  const [color, setColor] = useState<string>("red");
  const [view, setView] = useState<number>(0);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  const handleViewChange = (newView: number) => {
    setView(newView);
  }; 

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 lg:flex-[2] flex justify-center items-center sm:flex-[1]">
        <div className="relative w-full h-[50vh] lg:h-full">
          <Image
            src={carImages[color][view]}
            alt="car"
            fill={true}
            style={{
              objectFit: "contain",
              overflow: "hidden"
            }} />
        </div>
      </div>
        <div className="flex-1 lg:flex-[1] flex flex-col justify-center py-4 items-center bg-slate-50">
          <WsComponent />
        <ViewSelector
          selectedView={view}
          onViewChange={handleViewChange} />
        <ColourSelector
          selectedColor={color}
          onColorChange={handleColorChange} />
      </div>
      </div>
    </>
  );
}

export default Home;
