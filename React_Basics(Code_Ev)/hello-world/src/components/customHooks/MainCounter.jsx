import React from "react";
import useCounter from "../../hooks/useCounter";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

const MainCounter = () => {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <>
      <div>
        <h1>Parent Count : {count}</h1>
        <button>Increment</button>
        <button>Increment</button>
        <button>Increment</button>
      </div>
      <counter1></counter1>
      <Counter2></Counter2>
    </>
  );
};

export default MainCounter;
