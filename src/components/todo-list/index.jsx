import React, { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  const [filter, setFilter] = useState("all");

  const filteredTodos =
    filter === "all"
      ? todos
      : todos.filter((todo) =>
          filter === "completed" ? todo.completed : !todo.completed
        );

  return (
    <div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <div>
        <button onClick={() => setFilter("all")}>All tasks</button>
        <button onClick={() => setFilter("completed")}>Completed tasks</button>
        <button onClick={() => setFilter("uncompleted")}>
          {" "}
          Uncompleted tasks
        </button>
      </div>
    </div>
  );
};
