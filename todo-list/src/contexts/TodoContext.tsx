import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { TodoAction, TodoState } from "../interfaces/TodoInterfaces";
import { reducer } from "../reducers/TodoReducer";

const initialState: TodoState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 2194829104,
      tags: []
    },
    {
      item: "Start building todo app",
      completed: false,
      id: 1285901153,
      tags: []
    }
  ]
};

export const TodoContext: React.Context<
  [TodoState, Dispatch<TodoAction>]
> = createContext<[TodoState, Dispatch<TodoAction>]>([
  initialState,
  (): void => {}
]);

interface TodoProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const TodoProvider = ({
  children
}: TodoProviderProps): React.ReactElement => (
  <TodoContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoContext.Provider>
);

export const useTodoContext = (): [TodoState, Dispatch<TodoAction>] =>
  useContext(TodoContext);
