import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComp";
import ErrorFallback from "./components/ErrorBoundary";
import Parent from "./components/context/Parent";
import { Provider, Consumer } from "./components/context/userContext";

function App({ isLoggedIn, username }) {
  // console.log(`Provider : ${Provider}, Consumer : ${Consumer}`);
  console.log(Provider);
  console.log(Consumer);
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

      <Provider value="Birat">
        <Parent></Parent>
      </Provider>
    </>
  );
}

export default App;
