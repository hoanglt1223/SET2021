import "./styles.css";

const TodoItem = (props) => {
  const { todo } = props;

  return (
    <div className="todo-container">
      <div className="title">{todo?.title}</div>
    </div>
  );
};

export default TodoItem;
