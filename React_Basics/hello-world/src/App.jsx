import { useState } from "react";

const App = () => {
  const [number, setHasLiked] = useState(0);

  return (
    <>
      <div className="">
        <Card></Card>
      </div>
    </>
  );
};

export default App;
