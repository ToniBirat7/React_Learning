import { UserContext } from "./userContext";
import { use, useContext } from "react";

const Sib1 = (props) => {
  console.log("Sib1", props);
  const user = useContext(UserContext);

  console.log("User : ", user);
  return (
    <>
      <h1>Sib 1 User: {user}</h1>
    </>
  );
};

export default Sib1;
