import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./components/BuggyComp";
import ErrorFallback from "./components/ErrorBoundary";
import Parent from "./components/context/Parent";
// import { Provider } from "./components/context/userContext";
import { UserContext } from "./components/context/userContext";
import { useState } from "react";

function App({ isLoggedIn, username }) {
  const [theme, setTheme] = useState("light");
  const [uname, setUname] = useState("Kese");
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

      <UserContext.Provider value={{ name: "Birat", age: 24 }}>
        <Parent></Parent>
      </UserContext.Provider>
    </>
  );
}

export default App;
