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
      return {
        todos: [...state.todos, action.payload]
      };
    case "COMPLETE":
      const id = action.payload.id;
      return {
        todos: state.todos.map(
          (todo): Todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          }
        )
      };
    default:
      return state;
  }
};
