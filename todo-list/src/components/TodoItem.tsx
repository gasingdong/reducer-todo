import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps): React.ReactElement => {
  const onClick = (event: React.MouseEvent<HTMLElement>): void => {
    console.log("finish");
  };

  return (
    <div className="todo-list__item">
      <h1 onClick={onClick}>{props.todo.item}</h1>
    </div>
  );
};

export default TodoItem;
