import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Form />
      <TodoList todoList={[]} />
    </div>
  );
};

export default App;
