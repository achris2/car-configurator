"use client";

import { socket } from "@/socket";
import { useState } from "react";

type Props = {};

const WsComponent: React.FC<Props> = () => {
//   const [choices, setChoices] = useState<any>({});

//   const sendChoices = (newChoices: any) => {
//     socket.emit('sendChoices', newChoices);
//   };

//   const handleButtonClick = (choiceKey: string, choiceValue: any) => {
//     const updatedChoices = { ...choices, [choiceKey]: choiceValue };
//     setChoices(updatedChoices);
//     sendChoices(updatedChoices);
//   };

  return (
      <div>
          <p>Your Audi is red with 16" wheels. Current viewing position is X</p>
    </div>
  );
};

export default WsComponent;