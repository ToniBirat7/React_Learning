import { useContext } from "react";
import { CounterContext } from "./userContext";
import Btn from "./Btn";
const Sib1 = () => {
  const counterContext = useContext(CounterContext);
  return (
    <>
      <h1>Inner First Count : {counterContext.state} </h1>
      <Btn dispatch={counterContext.dispatch}></Btn>
      <br></br>
    </>
  );
};

export default Sib1;
