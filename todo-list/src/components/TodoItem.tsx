import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";
import TagForm from "./TagForm";

interface TodoItemProps {
  todo: Todo;
  completeItem: (item: Todo) => void;
  addTag: (item: Todo, tag: string) => void;
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
      {
        props.todo.tags.map((tag): React.ReactElement => <p>{tag}</p>)
      }
      <TagForm todo={props.todo} addTag={props.addTag} />
    </div>
  );
};

export default TodoItem;
