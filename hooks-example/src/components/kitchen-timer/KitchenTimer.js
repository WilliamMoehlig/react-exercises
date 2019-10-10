import React, { useEffect, useState, useRef } from 'react';

const KitchenTimer = props => {
  const timerRef = useRef();
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const { current } = timerRef;

    clearInterval(current);
    setSecondsElapsed(0);
    return () => {
      clearInterval(current);
    };
  }, [props.interval, timerRef]);

  const SetTimer = timeout => {
    timerRef.current = setInterval(() => {
      setSecondsElapsed(elapsed => elapsed + timeout / 1000);
    }, timeout);
  };

  const StopTimer = () => {
    clearInterval(timerRef.current);
  };

  const ClearTimer = () => {
    setSecondsElapsed(0);
  };

  return (
    <>
      <div className="timer">
        <h1>{secondsElapsed}</h1>
        <button type="button" onClick={() => SetTimer(props.interval)}>
          Start
        </button>
        <button type="button" onClick={StopTimer}>
          Stop
        </button>
        <button type="button" onClick={ClearTimer}>
          Reset
        </button>
      </div>
    </>
  );
};

export default KitchenTimer;
