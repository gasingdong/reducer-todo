import { Reducer } from "react";
import { Todo } from "../interfaces/TodoInterfaces";

interface TodoAction {
  type: string;
}

export const initialState: Todo[] = [
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
];

export const reducer: Reducer<Todo[], TodoAction> = (state, action): Todo[] => {
  return state;
};
