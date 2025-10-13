const Btn = ({ dispatch }) => {
  return (
    <>
      <button onClick={() => dispatch({ type: "inc" })}>Increament</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Btn;
