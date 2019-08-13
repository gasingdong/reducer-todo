export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  item: string;
  completed: boolean;
  id: number;
  tags: string[];
}

export interface TodoPayload {
  todo: Todo;
  tag?: string;
}

export interface TodoAction {
  type: string;
  payload?: TodoPayload;
}
