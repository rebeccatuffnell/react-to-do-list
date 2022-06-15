import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList.js";
import { v4 as uuid } from "uuid";
import "./index.css";

const LOCAL_STORAGE_KEY = "toDoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const toDoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function selectTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    toDoNameRef.current.value = null;
  }

  function handleDeleteToDo() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div id="list">
      <h1>To Do List 📝</h1>
      <ToDoList todos={todos} selectTodo={selectTodo} />
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add To Do</button>
      <button onClick={handleDeleteToDo}>Delete To Do</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
