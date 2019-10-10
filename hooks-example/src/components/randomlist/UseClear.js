import { useState } from 'react';

const UseClear = initialCounter => {
  const [timesCleared, setTimesCleared] = useState(initialCounter);

  const clear = () => {
    return setTimesCleared(timesCleared + 1);
  };

  return [timesCleared, clear];
};

export default UseClear;
