const ReactX = (() => {
  let state = [];

  let index = 0;
  const useState = (initialValue) => {
    const localIndex = index;
    index++;

    if (state[localIndex] === undefined) {
      state[localIndex] = initialValue;
    }

    console.log("state : ", state);

    const setState = (updateValue) => {
      state[localIndex] = updateValue;
    };
    return [state[localIndex], setState];
  };

  const resetIndex = () => {
    index = 0;
  };

  const useEffect = (callback, dependencyArray) => {
    let hasChanged = true;

    const oldDependency = state[index];

    if (oldDependency) {
      hasChanged = false;

      dependencyArray.forEach((dependency, index) => {
        const old = oldDependency[index];
        const same = Object.is(dependency, old);
        if (!same) {
          hasChanged = true;
        }
      });
    }

    if (hasChanged) {
      console.log("Has Changed");
      callback();
    }

    state[index] = dependencyArray;
    index++;
  };

  return {
    useState,
    resetIndex,
    useEffect,
  };
})();

const { useState, resetIndex, useEffect } = ReactX;

const Component = () => {
  const [value, setValue] = useState(1);

  const [counter, setCounter] = useState(0);

  console.log("Value : ", value);
  console.log("Counter : ", counter);

  useEffect(() => {
    console.log("Here we Go Effect");
  }, [counter]);

  const root = document.getElementById("root");

  const btn = document.getElementById("btn");

  setValue(2);

  if (value === 2) {
    setCounter(1);
  }

  if (counter === 1) {
    setCounter(3);
  }

  root.innerHTML = `<h1>Current Value is ${value}`;
};

Component();
resetIndex();
Component();
resetIndex();
Component();
