// import Parent from "./components/context/Parent";
import { CounterContext } from "./components/context/userContext";
import { useReducer, useState } from "react";
import Parent from "./components/callback_memo/Parent";

const reducer = (state, action) => {
  console.log("I am Reducer");
  console.log("Action", action);
  console.log("State", state);
  switch (action.type) {
    case "inc":
      console.log("Inc");
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      {/* <CounterContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Parent></Parent>
      </CounterContext.Provider> */}
      <Parent></Parent>
    </>
  );
}

export default App;
