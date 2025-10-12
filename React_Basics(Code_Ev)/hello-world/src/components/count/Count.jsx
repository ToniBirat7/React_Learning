import React, { useEffect, useRef, useState } from "react";

const Count = () => {
  const [items, setItems] = useState([]);
  const btnRef = useRef(null);

  console.log(btnRef);

  useEffect(() => {
    console.log("This Is Effect", items);
    const el = btnRef.current;

    console.log(el);

    if (!el) return;

    el.addEventListener("mouseenter", (e) => {
      console.log(e.type);
    });

    return () => {
      // el.removeEventListener("mouseenter", () => console.log("Removed it"));
      console.log("Removed it");
    };
  }, [items]);

  const addItem = () => {
    const newItem = {
      // id: items.length, // fine for append-only lists, but see notes below
      id: Date.now(), // better unique id for simple demo
      value: Math.floor(Math.random() * 10) + 1, // 1..10
    };

    // use functional update to avoid stale closure if many updates happen quickly
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <div>
      <button onClick={addItem} ref={btnRef}>
        Add an Item
      </button>

      <ul>
        {items.map((it) => (
          <li key={it.id}>{it.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Count;
