import { useCallback, useState } from "react";

import "./styles.css";

const AddTodoForm = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.log({ taskTitle });
    },
    [taskTitle]
  );

  const onChange = useCallback((event) => {
    const title = event.target.value;
    console.log({ title });

    if (title) {
      setTaskTitle(title);
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className="add-todo-form">
      <label htmlFor="add-todo-input">New Todo: </label>
      <input
        type="text"
        name="todo"
        id="add-todo-input"
        value={taskTitle}
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
