// src/LightBulb.tsx
import React, { useState } from 'react';
import useSound from 'use-sound';
import oTunirMaa from './sounds/o_tunir_maa.mp3'; // Ensure this path is correct
import './LightBulb.css'; // Import CSS for styling

interface LightBulbProps {
  changeBackgroundColor: (color: string) => void; // Accept color change function as a prop
}

const LightBulb: React.FC<LightBulbProps> = ({ changeBackgroundColor }) => {
  const [bulbCount] = useState<number>(20); // Total number of bulbs per row
  const [rowCount] = useState<number>(15); // Total number of rows
  const [colors, setColors] = useState<string[]>(Array(bulbCount * rowCount).fill('yellow')); // Create an array of bulbs, initially all yellow
  const [play] = useSound(oTunirMaa);

  const changeColors = () => {
    const newColors = colors.map((color) => (color === 'yellow' ? 'orange' : 'yellow'));
    setColors(newColors); // Change bulb colors

    // Change background color randomly between white and light blue
    const newBgColor = newColors[0] === 'yellow' ? 'lightblue' : 'white';
    changeBackgroundColor(newBgColor); // Call the function to change the background color

    play(); // Play sound
  };

  return (
    <div className="light-bulb-container">
      <div className="bulb-rope">
        {Array.from({ length: rowCount }, (_, rowIndex) => (
          <div className="bulb-row" key={rowIndex}>
            {colors.slice(rowIndex * bulbCount, (rowIndex + 1) * bulbCount).map((color, index) => (
              <div
                key={index}
                className="light-bulb"
                style={{ backgroundColor: color }} // Apply background color to each bulb
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button className="switch-button" onClick={changeColors}>Switch Lights</button>
    </div>
  );
};

export default LightBulb;
