import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComp";
import ErrorFallback from "./components/ErrorBoundary";
import Parent from "./components/context/Parent";
// import { Provider } from "./components/context/userContext";
import { UserContext, CounterContext } from "./components/context/userContext";
import { useReducer, useState } from "react";
import Count from "./components/count/Count";
import Reducer from "./components/reducer/Reducer";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function App({ isLoggedIn, username }) {
  const [theme, setTheme] = useState("light");
  const [uname, setUname] = useState("Kese");
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log("Reset");
        }}
      >
        <BuggyComponent></BuggyComponent>
      </ErrorBoundary> */}
      {/* Context Value Providing */}
      {/* <Provider value="Birat" username="Karki">
        <Parent></Parent>
      </Provider> */}

      {/* <UserContext.Provider value={{ name: "Birat", age: 24 }}>
        <Parent></Parent>
      </UserContext.Provider> */}

      {/* <Count></Count> */}
      {/* <Reducer></Reducer> */}
      <CounterContext.Provider value={{ state: count, dispatch: dispatch }}>
        <Parent></Parent>
      </CounterContext.Provider>
    </>
  );
}

export default App;
