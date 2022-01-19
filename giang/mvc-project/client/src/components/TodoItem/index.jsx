import "./styles.css";

const TodoItem = (props) => {
  const { title } = props;

  return (
    <div className="task-container">
      <div className="title">{title}</div>
    </div>
  );
};

export default TodoItem;
