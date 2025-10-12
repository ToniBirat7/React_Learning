import Sib1 from "./Sib1";

const Sib2 = (props) => {
  console.log("Sib2", props);
  return (
    <>
      <h1>Inner 1</h1>
      <Sib1 name={props}></Sib1>
    </>
  );
};

export default Sib2;
