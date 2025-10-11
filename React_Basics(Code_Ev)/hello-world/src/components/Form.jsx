import { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("Birat");
  const [age, setAge] = useState("");

  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`I rendered ${count} times`);
    setCount(count + 1);
    return (e) => {
      console.log("I am Clean Up", e);
    };
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      age: age,
    };
    console.log(data);
  };

  console.log(name, age);

  return (
    <form className="container" onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
