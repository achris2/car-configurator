"use client"

// imports 
import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../socket';
import Image from 'next/image';

// component imports 

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Slider } from "@/components/ui/slider"
import { Switch } from './ui/switch';


// importing colour images 
import black from '../../public/assets/colours/black.png';
import mGreen from '../../public/assets/colours/metallic-ocean-green.png';
import mSand from '../../public/assets/colours/metallic-sand.png';
import mSkyBlue from '../../public/assets/colours/metallic-sky-blue.png';
import mSunsetOrange from '../../public/assets/colours/metallic-sunset-orange.png';
import red from '../../public/assets/colours/red.png';
import white from '../../public/assets/colours/white.png';

// importing wheel images

import wheel16_1 from '../../public/assets/wheels/16inch-1.png';
import wheel16_2 from '../../public/assets/wheels/16inch-2.png';
import wheel17_1 from '../../public/assets/wheels/17inch-1.png';
import wheel17_2 from '../../public/assets/wheels/17inch-2.png';
import wheel18_1 from '../../public/assets/wheels/18inch-1.png';
import wheel18_2 from '../../public/assets/wheels/18inch-2.png';
import { Label } from './ui/label';


// colour object 
const colours = [
    { name: 'Black', image: black },
    { name: 'Red', image: red },
    { name: 'White', image: white },
    { name: 'Metallic Ocean Green', image: mGreen },
    { name: 'Metallic Sand', image: mSand },
    { name: 'Metallic Sky Blue', image: mSkyBlue },
    { name: 'Metallic Sunset Orange', image: mSunsetOrange },
];

// wheels object 

const wheels = [
    { name: '16" - 1', image: wheel16_1 },
    { name: '16" - 2', image: wheel16_2 },
    { name: '17" - 1', image: wheel17_1 },
    { name: '17" - 2', image: wheel17_2 },
    { name: '18" - 1', image: wheel18_1 },
    { name: '18" - 2', image: wheel18_2 },
];

// managing state 

const CarConfigurator: React.FC = () => {
    const [selectedColour, setSelectedColour] = useState<string | null>('Black'); // default colour black 
    const [selectedWheel, setSelectedWheel] = useState<string | null>('16" - 1');
    const [sliderValue, setSliderValue] = useState<number[]>([50]); // Initial slider value set to 50
    const [interiorView, setInteriorView] = useState<boolean>(false); // Initial interior view state set to false 
    const socketRef = useRef(socket);
    
    useEffect(() => {
        // Emit car configuration when any of these state variables change
        const emitCarConfiguration = () => {
            const configuration = {
                colour: selectedColour,
                wheel: selectedWheel,
                sliderValue: sliderValue,
                interiorView: interiorView,
            };
            socketRef.current.emit('carConfiguration', configuration);
        };
                // Call emitCarConfiguration whenever any of these states change
                emitCarConfiguration();

                // Cleanup
                return () => {
                    socketRef.current.off('carConfiguration');
                };
            }, [selectedColour, selectedWheel, sliderValue, interiorView]);
        
            const handleColourSelection = (colour: string) => {
                setSelectedColour(colour);
            };
        
            const handleWheelSelection = (wheel: string) => {
                setSelectedWheel(wheel);
            };
        
            const handleSliderChange = (value: number[]) => {
                setSliderValue(value);
            };
        
            const handleInteriorViewChange = (checked: boolean) => {
                setInteriorView(checked);
            };
        

    return (
      <div className="container mx-auto m-4 p-10 justify-between">
            <form>

            <div>
                        <h2 className="text-foreground text-lg font-bold">
                            Rotate Camera
                        </h2>
                        <div className="mt-4 mx-auto p-4 mb-4">
                        <Slider
                            defaultValue={[50]}
                            max={100}
                            step={5}
                            className="p-2 mt-auto"
                            onValueCommit={(value) => handleSliderChange(value)}
                        />
                        </div>
                </div>
                <div>
                <h2 className="text-foreground text-lg font-bold">Select Colour</h2>
                    <Carousel className="p-4">
                        <CarouselContent>
                            {colours.map((colour) => (
                                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4" key={colour.name}>
                                    <label key={colour.name} className="text-xsm font-medium cursor-pointer">
                                        <input
                                            type="radio"
                                            name="colour"
                                            value={colour.name}
                                            checked={selectedColour === colour.name}
                                            onChange={() => setSelectedColour(colour.name)}
                                            className="hidden"
                                        />
                                        <div className="p-2">
                                            <Image
                                                src={colour.image}
                                                alt={colour.name}
                                                priority={true}
                                                onClick={() => setSelectedColour(colour.name)} className={` ${selectedColour === colour.name ? 'p-1 ring-2 ring-primary' : ''}`}
                                            />
                                            <p className="text-center text-sm font-semibold p-2 mt-auto">{colour.name}</p>
                                        </div>
                                    </label>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                <div>
                <h2 className="text-foreground text-lg font-bold">Select Wheels</h2>
          <Carousel className="p-4">
            <CarouselContent>
              {wheels.map((wheel) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4" key={wheel.name}>
                  <div key={wheel.name} className="text-xsm font-medium cursor-pointer">
                    <div className="p-2">
                      <Image
                        src={wheel.image}
                        alt={wheel.name}
                        onClick={() => setSelectedWheel(wheel.name)}
                        className={`${selectedWheel === wheel.name ? 'p-1 ring-2 ring-primary' : ''}`}
                      />
                      <p className="text-center text-sm font-semibold p-2 mt-auto">{wheel.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
                </div>
                <div>
                    <h2 className="text-foreground text-lg font-bold mt-4">View Mode</h2>
                    <div className="flex items-center space-x-2 mt-4 mx-auto p-4 mb-4">
                        <Switch
                            id="view-mode"
                            onCheckedChange={(checked) => handleInteriorViewChange(checked)}
                        />
                        <label htmlFor="view-mode" className="text-sm font-semibold text-foreground">
                            Interior View
                        </label>
                    </div>
                </div>
            </form>

            </div>
  );
};

export default CarConfigurator;
