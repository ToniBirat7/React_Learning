import React from "react";

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
      ></input>
      <label htmlFor="age">Age</label>
      <input type="number" id="age" name="age"></input>
    </form>
  );
};

export default Form;
