import Count from "./Count";
import Button from "./Button";
import Title from "./Title";
import { useCallback, useState } from "react";
const Parent = () => {
  const [age, setAge] = useState(0);

  const incrementAge = useCallback(() => {
    let i = 0;
    while (i < 2000000000) i++;
    setAge((prev) => {
      return prev + 1;
    });
  }, [age]);

  return (
    <>
      <div>
        <Title></Title>
        <Count text="Age" count={age}></Count>
        <Button handleClick={incrementAge}>Increment Age</Button>
      </div>
    </>
  );
};

export default Parent;
