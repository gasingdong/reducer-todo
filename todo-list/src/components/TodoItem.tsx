import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";
import TagForm from "./TagForm";
import { useTodoContext } from "../contexts/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps): React.ReactElement => {
  const dispatch = useTodoContext()[1];

  const onClick = (): void => {
    dispatch({
      type: "COMPLETE",
      payload: {
        todo: props.todo
      }
    });
  };

  return (
    <div
      className={
        props.todo.completed ? "todo-list__item--completed" : "todo-list__item"
      }
    >
      <h1 onClick={onClick}>{props.todo.item}</h1>
      {props.todo.tags.map(
        (tag): React.ReactElement => (
          <p key={tag}>{tag}</p>
        )
      )}
      <TagForm todo={props.todo} />
    </div>
  );
};

export default TodoItem;
