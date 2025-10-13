import { useContext } from "react";
import Sib2 from "./Sib2";
import { CounterContext } from "./userContext";

const Parent = () => {
  const counterContext = useContext(CounterContext);
  console.log("Context", counterContext);
  return (
    <>
      <h1>Parent Count : {counterContext.state}</h1>
      <button onClick={() => counterContext.dispatch({ type: "inc" })}>
        Increament
      </button>
      <button onClick={() => counterContext.dispatch({ type: "inc" })}>
        Decrement
      </button>
      <button onClick={() => counterContext.dispatch({ type: "inc" })}>
        Reset
      </button>
      <br></br>
      <Sib2></Sib2>
    </>
  );
};

export default Parent;
