import Sib1 from "./Sib1";
import { CounterContext } from "./userContext";
import { useContext } from "react";
import Btn from "./Btn";

const Sib2 = () => {
  const counterContext = useContext(CounterContext);
  return (
    <>
      <h1>Inner First Count : {counterContext.state} </h1>
      <Btn dispatch={counterContext.dispatch}></Btn>
      <br></br>
      <Sib1></Sib1>
    </>
  );
};

export default Sib2;
