import React from "react";
// import components
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filterdTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterdTodos.map((todo) => {
          return (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
