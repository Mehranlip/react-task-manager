import "./App.css";

// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mehranlip Task Manager</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
