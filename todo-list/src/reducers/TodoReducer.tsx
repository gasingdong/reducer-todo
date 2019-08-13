import { Reducer } from "react";
import { TodoAction, TodoState, Todo } from "../interfaces/TodoInterfaces";

export const reducer: Reducer<TodoState, TodoAction> = (
  state,
  action
): TodoState => {
  const { payload } = action;
  switch (action.type) {
    case "ADD":
      return action.payload
        ? {
            todos: [...state.todos, action.payload.todo]
          }
        : state;
    case "COMPLETE":
      return payload
        ? {
            todos: state.todos.map(
              (todo): Todo => {
                if (todo.id === payload.todo.id) {
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
    case "TAG":
      return payload
        ? {
            todos: state.todos.map(
              (todo): Todo => {
                if (todo.id === payload.todo.id) {
                  return {
                    ...todo,
                    tags: payload.tag ? [...todo.tags, payload.tag] : todo.tags
                  };
                }
                return todo;
              }
            )
          }
        : state;
    default:
      return state;
  }
};
