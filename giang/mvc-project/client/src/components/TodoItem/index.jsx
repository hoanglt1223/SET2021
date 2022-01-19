import "./styles.css";

const TodoItem = (props) => {
  const { todo, updateTodoStatus } = props;

  return (
    <div className="todo-container">
      <div
        className="title"
        onClick={() => {
          console.log({ todo });

          updateTodoStatus(todo);
        }}
      >
        {todo?.title}
      </div>
    </div>
  );
};

export default TodoItem;
