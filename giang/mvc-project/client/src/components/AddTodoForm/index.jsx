import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import apis from "../../apis";
import { ETaskStatus } from "../../enums";
import "./styles.css";

const AddTodoForm = (props) => {
  const { reFetchData } = props;

  const [taskTitle, setTaskTitle] = useState("");

  const handleAfterCreateSuccess = useCallback(async () => {
    await reFetchData();
    setTaskTitle("");
    toast.success("Add todo success");
  }, [reFetchData]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const newTask = {
          title: taskTitle,
          status: ETaskStatus.DOING,
        };

        await apis.task.create(newTask);
        handleAfterCreateSuccess();
      } catch (error) {
        toast.error(error);
      }
    },
    [taskTitle, handleAfterCreateSuccess]
  );

  const onChange = useCallback((event) => {
    const title = event.target.value;
    setTaskTitle(title);
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
