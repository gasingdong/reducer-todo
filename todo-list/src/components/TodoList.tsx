import React from "react";
import { Todo } from "../interfaces/TodoInterfaces";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
  completeItem: (item: Todo) => void;
}

const TodoList = (props: TodoListProps): React.ReactElement => {
  return (
    <div className="todo-list">
      {props.todoList.map(
        (todo): React.ReactElement => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeItem={props.completeItem}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
