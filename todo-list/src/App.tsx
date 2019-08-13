import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
