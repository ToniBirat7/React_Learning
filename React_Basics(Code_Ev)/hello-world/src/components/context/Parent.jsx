import Sib2 from "./Sib2";

const Parent = (props) => {
  console.log("Parent", props);
  return (
    <>
      <h1>Parent</h1>
      <Sib2 name={props}></Sib2>
    </>
  );
};

export default Parent;
