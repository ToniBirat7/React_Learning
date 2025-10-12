import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComp";
import ErrorFallback from "./components/ErrorBoundary";
import Parent from "./components/context/Parent";
import { Provider, Consumer } from "./components/context/userContext";

function App({ isLoggedIn, username }) {
  console.log(`Provider : ${provider}, Consumer : ${consumer}`);
  return (
    <>
      {/* {isLoggedIn ? <h1>Hi ${username}</h1> : <Form></Form>} */}
      {/* <ClassComponent></ClassComponent> */}

      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log("Reset");
        }}
      >
        <BuggyComponent></BuggyComponent>
      </ErrorBoundary> */}
      <Provider></Provider>
      <Parent name="Passed from App"></Parent>
    </>
  );
}

export default App;
