import React, { useState, useEffect } from "react";
import "./App.css";

// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);
  // start frst app
  useEffect(() => {
    getLocalTodos();
  }, []);
  // useEffect
  useEffect(() => {
    filterdHandler();
    saveLocalTodo();
  }, [todos, status]);
  // fanction
  const filterdHandler = () => {
    switch (status) {
      case "completed":
        setFilterdTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterdTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterdTodos(todos);
        break;
    }
  };

  // save local
  const saveLocalTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>React Task Manager</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList filterdTodos={filterdTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
