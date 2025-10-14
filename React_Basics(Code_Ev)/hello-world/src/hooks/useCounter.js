import { useEffect, useState } from "react";

const useCounter = (state) => {
  const [count, setCount] = useState(state);

  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };

  const reset = () => {
    setCount(0);
  };
};

export default useCounter;
