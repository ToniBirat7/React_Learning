import { Consumer } from "./userContext";

const Sib1 = (props) => {
  console.log("Sib1", props);
  return (
    <>
      <Consumer>
        {(value) => {
          return <h1>Sibling 2, Value : {value}</h1>;
        }}
      </Consumer>
    </>
  );
};

export default Sib1;
