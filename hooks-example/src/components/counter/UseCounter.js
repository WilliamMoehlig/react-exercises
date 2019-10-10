import { useState } from 'react';

const UseCounter = (start, finish, step) => {
  const [count, setCount] = useState(start);

  const handleCount = () => {
    if (count === finish) {
      return setCount(start);
    } else return setCount(count + step);
  };

  return [count, handleCount];
};

export default UseCounter;
