import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComp";
import ErrorFallback from "./components/ErrorBoundary";
import Parent from "./components/context/Parent";

function App({ isLoggedIn, username }) {
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
      <Parent name="Passed from App"></Parent>
    </>
  );
}

export default App;
