import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import apis from "../../apis";
import { ETodoStatus } from "../../enums";
import "./styles.css";

const AddTodoForm = (props) => {
  const { reFetchData } = props;

  const [todoTitle, setTodoTitles] = useState("");

  const handleAfterCreateSuccess = useCallback(async () => {
    await reFetchData();
    setTodoTitles("");
    toast.success("Add todo success");
  }, [reFetchData]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!todoTitle) {
        return;
      }

      try {
        const newTask = {
          title: todoTitle,
          status: ETodoStatus.DOING,
        };

        await apis.todo.create(newTask);
        handleAfterCreateSuccess();
      } catch (error) {
        toast.error(error);
      }
    },
    [todoTitle, handleAfterCreateSuccess]
  );

  const onChange = useCallback((event) => {
    const title = event.target.value;
    setTodoTitles(title);
  }, []);

  return (
    <form onSubmit={onSubmit} className="add-todo-form">
      <label htmlFor="add-todo-input">New Todo: </label>
      <input
        type="text"
        name="todo"
        id="add-todo-input"
        value={todoTitle}
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
