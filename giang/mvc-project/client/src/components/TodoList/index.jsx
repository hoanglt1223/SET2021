import { useContext } from "react";

import { toast } from "react-toastify";

import TodoItem from "../TodoItem";
import "./styles.css";
import apis from "../../apis";
import UserContext from "../../context/user.context";

const TodoList = (props) => {
  const { todos, reFetchData } = props;
  const userContext = useContext(UserContext);
  const currentUser = userContext?.currentUser;

  async function updateTodo(todoId, newTodo) {
    try {
      await apis.todo.updateById(todoId, newTodo);

      toast.success("Update todo successfully");
      await reFetchData(currentUser?._id);
    } catch (error) {
      toast.error(error);
      toast.error(error.message);
    }
  }

  async function deleteTodo(todo) {
    try {
      await apis.todo.deleteById(todo._id);

      toast.success("Remove todo successfully");
      await reFetchData(currentUser?._id);
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
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
