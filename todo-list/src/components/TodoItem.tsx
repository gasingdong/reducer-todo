import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";

interface TodoItemProps {
  todo: Todo;
  completeItem: (item: Todo) => void;
}

const TodoItem = (props: TodoItemProps): React.ReactElement => {
  const onClick = (): void => {
    console.log("finish");
    props.completeItem(props.todo);
  };

  return (
    <div
      className={
        props.todo.completed ? "todo-list__item--completed" : "todo-list__item"
      }
    >
      <h1 onClick={onClick}>{props.todo.item}</h1>
    </div>
  );
};

export default TodoItem;
