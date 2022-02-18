import "./styles.css";
import { ETodoStatus } from "../../enums";

const TodoItem = (props) => {
  const { todo, updateTodoStatus, deleteTodo } = props;

  return (
    <div className="todo-container">
      <div
        className={`title title--${
          todo?.status === ETodoStatus.DOING
            ? ETodoStatus.DOING
            : ETodoStatus.DONE
        }`}
        onClick={() => {
          updateTodoStatus(todo);
        }}
      >
        {todo?.title}
      </div>
      <i
        className="fa-solid fa-trash"
        onClick={() => {
          deleteTodo(todo);
        }}
      ></i>
    </div>
  );
};

export default TodoItem;
