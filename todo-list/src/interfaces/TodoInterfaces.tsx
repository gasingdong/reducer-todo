export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  item: string;
  completed: boolean;
  id: number;
}

export interface TodoAction {
  type: string;
  payload?: Todo;
}
