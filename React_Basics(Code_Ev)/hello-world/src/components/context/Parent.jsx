import { useContext } from "react";
import { UserContext } from "./userContext";

const ContextParent = () => {
  const counterContext = useContext(UserContext);
  console.log("Context", counterContext);
  return (
    <>
      <h1>Parent Count : {counterContext}</h1>
    </>
  );
};

export default ContextParent;
