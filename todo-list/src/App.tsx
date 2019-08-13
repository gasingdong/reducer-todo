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
      payload: {
        todo: item,
      }
    });
  };

  const completeItem = (item: Todo): void => {
    todoListDispatcher({
      type: "COMPLETE",
      payload: {
        todo: item,
      }
    });
  };

  const clearItems = (): void => {
    todoListDispatcher({
      type: "CLEAR"
    });
  };

  const addItemTag = (item: Todo, tag: string) => {
    todoListDispatcher({
      type: "TAG",
      payload: {
        todo: item,
        tag: tag,
      }
    })
  } 

  return (
    <div className="App">
      <Form addItem={addItem} clearItems={clearItems} />
      <TodoList todoList={todoList.todos} completeItem={completeItem} addTag={addItemTag} />
    </div>
  );
};

export default App;
