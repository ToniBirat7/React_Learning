import React, { useState } from "react";

const Count = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      // id: items.length, // fine for append-only lists, but see notes below
      id: Date.now(), // better unique id for simple demo
      value: Math.floor(Math.random() * 10) + 1, // 1..10
    };

    // use functional update to avoid stale closure if many updates happen quickly
    setItems((prev) => [...prev, newItem]);
  };

  console.log(items);

  return (
    <div>
      <button onClick={addItem}>Add an Item</button>

      <ul>
        {items.map((it) => (
          <li key={it.id}>{it.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Count;
