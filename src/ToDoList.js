import React from "react";
import Todo from "./ToDo";

export default function ToDoList({ todos, selectTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} selectTodo={selectTodo} todo={todo} />;
  });
}
