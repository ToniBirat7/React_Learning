import { useContext } from "react";
import Sib2 from "./Sib2";
import { CounterContext } from "./userContext";

const Parent = (props) => {
  const counterContext = useContext(CounterContext);
  console.log("Context", counterContext);
  return (
    <>
      <button onClick={() => {}}></button>
      <Sib2 name={props}></Sib2>
    </>
  );
};

export default Parent;
