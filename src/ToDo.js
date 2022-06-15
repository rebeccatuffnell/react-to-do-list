import React from "react";

export default function Todo({ todo, selectTodo }) {
  function handleTodoClick() {
    selectTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
