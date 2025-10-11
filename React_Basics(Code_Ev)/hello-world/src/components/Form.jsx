import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("Birat");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(name, age);

  return (
    <form className="container">
      <div>
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

      <div>
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
      <button type="submit"></button>
    </form>
  );
};

export default Form;
