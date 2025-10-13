import Sib1 from "./Sib1";
import { CounterContext } from "./userContext";
import { useContext } from "react";

const Sib2 = () => {
  const counterContext = useContext(CounterContext);
  return (
    <>
      <h1>Inner First Count : {counterContext.state} </h1>
      <button onClick={() => counterContext.dispatch({ type: "inc" })}>
        Increament
      </button>
      <button onClick={() => counterContext.dispatch({ type: "dec" })}>
        Decrement
      </button>
      <button onClick={() => counterContext.dispatch({ type: "reset" })}>
        Reset
      </button>
      <br></br>
      <Sib1></Sib1>
    </>
  );
};

export default Sib2;
