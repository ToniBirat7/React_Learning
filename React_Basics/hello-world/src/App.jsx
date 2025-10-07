import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=300")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
