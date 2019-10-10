import React from 'react';
import useCounter from './UseCounter';

export default function Counter() {
  const [count, handleCount] = useCounter(0, 10, 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <span role="img" className="red-button" aria-label="red button" onClick={handleCount}>
        🔴
      </span>
    </div>
  );
}
