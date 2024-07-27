import React from "react";
import { useState } from "react";
//create your first component
const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const tarea = () => {
    if (todos.length == 1) return "tarea";
    else return "tareas";
  };
  return (
    <div className="container">
      <h1>Todo App</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Añade una tarea"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? setTodos(todos.concat(value)) : null
            }
            value={value}
          />
        </li>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <i
              class="fa-solid fa-trash"
              onClick={() =>
                setTodos(
                  todos.filter((d, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
        <span>
          {todos.length} {tarea()} pendientes.
        </span>
      </ul>
    </div>
  );
};
export default Home;

















