import React from "react";
// import components
import Todo from "./Todo";
const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <Todo text={todo.text} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
