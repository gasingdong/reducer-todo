import React, { useState } from "react";
import { Todo } from "../interfaces/TodoInterfaces";

interface TagFormProps {
  todo: Todo;
  addTag: (item: Todo, tag: string) => void;
}

const TagForm = (props: TagFormProps): React.ReactElement => {
  const [tag, setTag] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTag(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.addTag(props.todo, tag);
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