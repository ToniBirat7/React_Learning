import { useContext } from "react";
import { CounterContext } from "./userContext";
const Sib1 = () => {
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
    </>
  );
};

export default Sib1;
