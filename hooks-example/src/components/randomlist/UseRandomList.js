import { useState } from 'react';

const UseRandomList = initialList => {
  const [randomList, setRandomList] = useState(initialList);

  const generateRandom = () => {
    setRandomList(randomList.concat([{ id: randomList.length, value: Math.floor(Math.random() * 100) }]));
  };

  const clearList = () => {
    setRandomList([]);
  };

  return [randomList, generateRandom, clearList];
};

export default UseRandomList;
