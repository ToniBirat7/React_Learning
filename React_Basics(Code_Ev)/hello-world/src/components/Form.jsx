import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  return (
    <form className="container">
      <div className>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>

      <div className="">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
      </div>
    </form>
  );
};

export default Form;
