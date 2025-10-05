const ReactX = (() => {
  let state = [];

  let index = 0;
  const useState = (initialValue) => {
    const localIndex = index;
    index++;

    console.log(localIndex);

    if (state[localIndex] === undefined) {
      state[localIndex] = initialValue;
    }

    const setState = (updateValue) => {
      state[localIndex] = updateValue;
    };
    return [state[localIndex], setState];
  };

  return {
    useState,
  };
})();

const { useState } = ReactX;

const Component = () => {
  const [value, setValue] = useState(1);

  const [counter, setCounter] = useState(0);

  console.log("Value : ", value);
  console.log("Counter : ", counter);

  const root = document.getElementById("root");

  const btn = document.getElementById("btn");

  setValue(2);
  setCounter(3);

  root.innerHTML = `<h1>Current Value is ${value}`;
};

Component();
Component();
