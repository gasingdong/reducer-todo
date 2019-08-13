import React, { useState } from "react";
import { Todo } from "../interfaces/TodoInterfaces";
import { useTodoContext } from "../contexts/TodoContext";

interface TagFormProps {
  todo: Todo;
}

const TagForm = (props: TagFormProps): React.ReactElement => {
  const [tag, setTag] = useState("");
  const dispatch = useTodoContext()[1];

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTag(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch({
      type: "TAG",
      payload: {
        todo: props.todo,
        tag: tag
      }
    });
    setTag("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add tag"
        value={tag}
        onChange={onChange}
      />
      <button type="submit">Add Tag</button>
    </form>
  );
};

export default TagForm;
