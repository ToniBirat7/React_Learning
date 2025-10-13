import React, { useReducer } from "react";

const initialState = 0;
const reducer = () => {};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch("increment")}></button>
      <button onClick={() => dispatch("decrement")}></button>
      <button onClick={() => dispatch("reset")}></button>
    </>
  );
};

export default Reducer;
