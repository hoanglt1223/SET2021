import { useCallback } from "react";
import { toast } from "react-toastify";

import TodoItem from "../TodoItem";
import "./styles.css";
import { ETodoStatus } from "../../enums";
import apis from "../../apis";

const TodoList = (props) => {
  const { todos, reFetchData } = props;

  const handleUpdateStatusSuccess = useCallback(async () => {
    await reFetchData();
    toast.success("Update todo success");
  }, []);

  const updateTodoStatus = useCallback(async (todo) => {
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

      handleUpdateStatusSuccess();
    } catch (error) {}
  }, []);

  return (
    <ul className="todo-list">
      {Array.isArray(todos) &&
        todos.map((todo, index) => {
          return (
            <li key={index}>
              <TodoItem todo={todo} updateTodoStatus={updateTodoStatus} />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
