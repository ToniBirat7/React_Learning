import { useState } from "react";
import Card from "../src/components/Card";

const App = () => {
  const [number, setHasLiked] = useState(0);

  return (
    <>
      <div className="">
        <Card props={"Birat"} />
      </div>
    </>
  );
};

export default App;
