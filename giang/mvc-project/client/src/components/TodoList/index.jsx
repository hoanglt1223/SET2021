import TodoItem from "../TodoItem";
import "./styles.css";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul className="todo-list">
      {Array.isArray(todos) &&
        todos.map((todo, index) => {
          return (
            <li key={index}>
              <TodoItem todo={todo} />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
