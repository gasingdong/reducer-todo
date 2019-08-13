import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
}

const TodoList = (props: TodoListProps): React.ReactElement => {
  return (
    <div className="todo-list">
      {props.todoList.map(
        (todo): React.ReactElement => (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </div>
  );
};

export default TodoList;
