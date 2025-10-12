import { UserContext } from "./userContext";
import { useContext } from "react";

const Sib1 = (props) => {
  console.log("Sib1", props);
  const { name, age } = useContext(UserContext);

  console.log(`Theme ${name}, UName ${age}`);
  return (
    <>
      <h1>Sib 1 User: {name}</h1>
    </>
  );
};

export default Sib1;
