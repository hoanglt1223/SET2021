import { useCallback } from "react";
import { toast } from "react-toastify";

import TodoItem from "../TodoItem";
import "./styles.css";
import { ETodoStatus } from "../../enums";
import apis from "../../apis";

const TodoList = (props) => {
  const { todos, reFetchData } = props;

  async function updateTodoStatus(todo) {
    try {
      let newStatus;

      if (todo.status === ETodoStatus.DOING) {
        newStatus = ETodoStatus.DONE;
      } else {
        newStatus = ETodoStatus.DOING;
      }

      await apis.todo.updateById(todo._id, {
        ...todo,
        status: newStatus,
      });

      toast.success("Update todo successfully");
      await reFetchData();
    } catch (error) {
      toast.error(error);
    }
  }

  async function deleteTodo(todo) {
    try {
      await apis.todo.deleteById(todo._id);

      toast.success("Remove todo successfully");
      await reFetchData();
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <ul className="todo-list">
      {Array.isArray(todos) &&
        todos.map((todo, index) => {
          return (
            <li key={index}>
              <TodoItem
                todo={todo}
                updateTodoStatus={updateTodoStatus}
                deleteTodo={deleteTodo}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
