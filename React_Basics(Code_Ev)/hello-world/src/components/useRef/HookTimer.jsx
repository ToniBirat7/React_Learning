import React, { useEffect, useReducer, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => {
        return prev + 1;
      });
    });

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <h1>Hook Timer : {timer}</h1>
      <button>Clear Timer</button>
    </>
  );
};

export default HookTimer;
