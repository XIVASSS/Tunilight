// src/App.tsx
import React, { useState } from 'react';
import LightBulb from './LightBulb'; // Ensure this path is correct
import './App.css'; // Import CSS for styling

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('white'); // Initial background color

  const changeBackgroundColor = (color: string) => {
    setBgColor(color); // Change background color
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Diwali Light Rope</h1>
      <LightBulb changeBackgroundColor={changeBackgroundColor} />
      <div className="button-container">
        <button onClick={() => changeBackgroundColor('lightblue')}>Switch Lights</button>
      </div>
    </div>
  );
};

export default App;
