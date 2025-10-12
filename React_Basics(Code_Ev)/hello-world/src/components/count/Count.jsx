import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState({ fname: "", lname: "" });

  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount((prev) => {
            console.log(prev);
            return prev + 1;
          });
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          setCount((prev) => {
            return prev - 1;
          });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Count;
