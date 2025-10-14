import React, { useEffect, useReducer, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const [open, setOpen] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("UseEffect");
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        return prev + 1;
      });
    });

    return () => {
      console.log("Clear");
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <h1>Hook Timer : {timer}</h1>
      <button
        onClick={() => {
          setOpen(false);
          clearInterval(intervalRef.current);
        }}
      >
        Clear Timer
      </button>
    </>
  );
};

export default HookTimer;
