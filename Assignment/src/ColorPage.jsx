import React, { useState } from 'react';

const ColorPage = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="page-content" style={{ backgroundColor }}>
      <h1>Color Page</h1>
      <p>Click the button to change the background color.</p>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button key={index} onClick={() => changeBackgroundColor(color)}>{color}</button>
        ))}
      </div>
    </div>
  );
};

export default ColorPage;
