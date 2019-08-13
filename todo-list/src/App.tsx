import React, { useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/TodoReducer";
import { Todo } from "./interfaces/TodoInterfaces";

const App = (): React.ReactElement => {
  const [todoList, todoListDispatcher] = useReducer(reducer, initialState);

  const addItem = (item: Todo): void => {
    todoListDispatcher({
      type: "ADD",
      payload: item
    });
  };

  const completeItem = (item: Todo): void => {
    todoListDispatcher({
      type: "COMPLETE",
      payload: item
    });
  };

  return (
    <div className="App">
      <Form addItem={addItem} />
      <TodoList todoList={todoList.todos} completeItem={completeItem} />
    </div>
  );
};

export default App;
