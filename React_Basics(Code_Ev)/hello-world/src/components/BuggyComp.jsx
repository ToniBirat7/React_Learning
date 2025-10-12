import React from "react";

function BuggyComponent() {
  const [count, setCount] = React.useState(0);

  if (count === 3) {
    throw new Error("Crashed!");
  }

  return <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>;
}

export default BuggyComponent;
