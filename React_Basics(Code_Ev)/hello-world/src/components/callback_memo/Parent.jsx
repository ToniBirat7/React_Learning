import Count from "./Count";
import Button from "./Button";
import Title from "./Title";
import { useMemo, useState } from "react";
const Parent = () => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  const incrementTwo = () => {
    setcount2((prev) => {
      return prev + 1;
    });
  };

  const incrementOne = () => {
    setcount((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <div>
        <Title></Title>
        <Count text="count" count={count}></Count>
        <span>{isEven ? "Even" : "Odd"}</span>
        <Button handleClick={incrementOne}>Increment Count 1</Button>
        <Button handleClick={incrementTwo}>Increment Count 2 : {count2}</Button>
      </div>
    </>
  );
};

export default Parent;
