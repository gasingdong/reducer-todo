import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps): React.ReactElement => {
  return (
    <div className="todo-list__item">
      <h1>{props.todo.item}</h1>
    </div>
  );
};

export default TodoItem;
