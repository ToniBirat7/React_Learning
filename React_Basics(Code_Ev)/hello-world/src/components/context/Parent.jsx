import { useContext } from "react";
import Sib2 from "./Sib2";
import { CounterContext } from "./userContext";
import Btn from "./Btn";

const Parent = () => {
  const counterContext = useContext(CounterContext);
  console.log("Context", counterContext);
  return (
    <>
      <h1>Parent Count : {counterContext.state}</h1>
      <Btn dispatch={counterContext.dispatch}></Btn>
      <br></br>
      <Sib2></Sib2>
    </>
  );
};

export default Parent;
