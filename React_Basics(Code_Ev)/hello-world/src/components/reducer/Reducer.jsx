import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch("increment")}></button>
      <button onClick={() => dispatch("decrement")}></button>
      <button onClick={() => dispatch("reset")}></button>
    </>
  );
};

export default Reducer;
