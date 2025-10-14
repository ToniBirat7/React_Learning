import { useEffect, useState } from "react";
import HookTimer from "./components/useRef/HookTimer";
import useDocumentTitle from "./hooks/useDocumentTitle";

function App() {
  const [count, setCount] = useState(0);
  useEffect(count);
  return (
    <>
      {/* <CounterContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Parent></Parent>
      </CounterContext.Provider> */}
      {/* <Parent></Parent> */}
      <button
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        Click me to Increment
      </button>
      <HookTimer></HookTimer>
    </>
  );
}

export default App;
