import React from "react";
const Title = () => {
  console.log("Rendering Title");
  return (
    <>
      <h2>useCallBack Hook</h2>
    </>
  );
};

export default React.memo(Title);
