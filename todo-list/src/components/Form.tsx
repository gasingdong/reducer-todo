import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

const Form = (): React.ReactElement => {
  const [todo, setTodo] = useState("");
  const dispatch = useTodoContext()[1];

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  const onClear = (): void => {
    dispatch({
      type: "CLEAR"
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        todo: {
          item: todo,
          id: Date.now(),
          completed: false,
          tags: []
        }
      }
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
      <button type="button" onClick={onClear}>
        Clear Completed
      </button>
    </form>
  );
};

export default Form;
