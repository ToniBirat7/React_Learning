import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComp";
import ErrorFallback from "./components/ErrorBoundary";
import Parent from "./components/context/Parent";
// import { Provider } from "./components/context/userContext";
import { UserContext } from "./components/context/userContext";

function App({ isLoggedIn, username }) {
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

      <UserContext.Provider value="Birat" uname="Karki">
        <Parent></Parent>
      </UserContext.Provider>
    </>
  );
}

export default App;
