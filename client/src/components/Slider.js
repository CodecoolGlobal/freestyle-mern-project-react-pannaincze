import React, { useState } from 'react';

function Slider({ setPrice }) {
  const [shownValue, setShownValue] = useState(0); // Initial value of the range slider

  const handleChange = (event) => {
    setShownValue(event.target.value);
    setPrice(event.target.value)
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={shownValue}
        onChange={handleChange}
      />
      <p>Price: {shownValue}</p>
    </div>
  );
};

export default Slider;