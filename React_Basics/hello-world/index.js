const ReactX = (() => {
  let state; // Undefined
  const useState = (initialValue) => {
    if (state === undefined) {
      state = initialValue;
    }

    console.log("Current Value is :", state);

    const setState = (updateValue) => {
      state = updateValue;
    };
    return [state, setState];
  };

  return {
    useState,
  };
})();

const { useState } = ReactX;

const Component = () => {
  const [value, setValue] = useState(1);

  console.log("Value : ", value);

  const root = document.getElementById("root");

  const btn = document.getElementById("btn");

  setValue(2);

  root.innerHTML = `<h1>Current Value is ${value}`;
};

Component();
Component();
