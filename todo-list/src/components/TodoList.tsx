import React from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../contexts/TodoContext";

const TodoList = (): React.ReactElement => {
  const { todos } = useTodoContext()[0];
  return (
    <div className="todo-list">
      {todos.map(
        (todo): React.ReactElement => (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </div>
  );
};

export default TodoList;
