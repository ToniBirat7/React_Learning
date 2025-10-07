import { useState, useEffect } from "react";
import Card from "../src/components/Card";

const App = () => {
  const data = 0;
  useEffect(() => {
    data = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    return;
  }, []);

  return (
    <>
      <div className="">
        <Card props={"Birat"} />
      </div>
    </>
  );
};

export default App;
