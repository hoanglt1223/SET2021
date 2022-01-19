import TodoItem from "../TodoItem";
import "./styles.css";

const TodoList = (props) => {
  const { tasks } = props;

  return (
    <ul className="todo-list">
      {Array.isArray(tasks) &&
        tasks.map((task, index) => {
          return (
            <li key={index}>
              <TodoItem title={task.title} />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
