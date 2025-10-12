import { UserContext } from "./userContext";
import { useContext } from "react";

const Sib1 = (props) => {
  console.log("Sib1", props);
  const { theme, uname } = useContext(UserContext);

  console.log(`Theme ${theme}, UName ${uname}`);
  return (
    <>
      <h1>Sib 1 User: {uname}</h1>
    </>
  );
};

export default Sib1;
