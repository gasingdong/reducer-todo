import { Reducer } from "react";
import { TodoAction, TodoState, Todo } from "../interfaces/TodoInterfaces";

export const initialState: TodoState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 2194829104
    },
    {
      item: "Start building todo app",
      completed: false,
      id: 1285901153
    }
  ]
};

export const reducer: Reducer<TodoState, TodoAction> = (
  state,
  action
): TodoState => {
  switch (action.type) {
    case "ADD":
      return action.payload
        ? {
            todos: [...state.todos, action.payload]
          }
        : state;
    case "COMPLETE":
      const { payload } = action;
      return payload
        ? {
            todos: state.todos.map(
              (todo): Todo => {
                if (todo.id === payload.id) {
                  return {
                    ...todo,
                    completed: !todo.completed
                  };
                }
                return todo;
              }
            )
          }
        : state;
    case "CLEAR":
      return {
        todos: state.todos.filter((todo): boolean => !todo.completed)
      };
    default:
      return state;
  }
};
