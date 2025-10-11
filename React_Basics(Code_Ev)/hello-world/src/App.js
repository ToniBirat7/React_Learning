import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";
function App({ isLoggedIn, username }) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`I rendered ${count} times`);
    setCount(count++);
    return () => {
      console.log("I am Clean Up");
    };
  }, []);
  return <>{isLoggedIn ? <h1>Hi ${username}</h1> : <Form></Form>}</>;
}

export default App;
