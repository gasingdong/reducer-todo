import React, { useState } from "react";
import { Todo } from "../interfaces/TodoInterfaces";

interface FormProps {
  addItem: (item: Todo) => void;
}

const Form = (props: FormProps): React.ReactElement => {
  const [todo, setTodo] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.addItem({
      item: todo,
      id: Date.now(),
      completed: false
    });
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type something to do"
        value={todo}
        onChange={onChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
