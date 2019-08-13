import React, { useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/TodoReducer";

const App = (): React.ReactElement => {
  const [todoList, todoListDispatcher] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Form />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
