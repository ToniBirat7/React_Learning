import Count from "./Count";
import Button from "./Button";
import Title from "./Title";
import { useState } from "react";
const Parent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge((prev) => {
      return prev + 1;
    });
  };

  const incrementSal = () => {
    setSalary((prev) => {
      return prev + 1000;
    });
  };
  return (
    <>
      <div>
        <Title></Title>
        <Count text="Age" count={age}></Count>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary}></Count>
        <Button handleClick={incrementSal}>Increment Salary</Button>
      </div>
    </>
  );
};

export default Parent;
