import { useState } from 'react';

export const useCounter = (min, max) => {
  const [counter, setcounter] = useState(min);

  const increment = () => {
    if (counter < max) {
      setcounter(counter + 1);
    }
  };

  const decrement = () => {
    console.log('desc');
    if (counter > min) {
      setcounter(counter - 1);
    }
  };

  return { counter, increment, decrement };
};