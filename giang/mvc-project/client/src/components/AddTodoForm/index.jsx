import { useState, useContext } from "react";
import { toast } from "react-toastify";

import UserContext from "../../context/user.context";

import apis from "../../apis";
import { ETodoStatus } from "../../enums";
import "./styles.css";

const AddTodoForm = (props) => {
  const { reFetchData } = props;
  const userContext = useContext(UserContext);
  const currentUser = userContext?.currentUser;

  const [todoTitle, setTodoTitles] = useState("");

  async function handleAfterCreateSuccess() {
    await reFetchData(currentUser?._id);
    setTodoTitles("");
    toast.success("Add todo success");
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (!todoTitle) {
      return;
    }

    try {
      const newTask = {
        title: todoTitle,
        status: ETodoStatus.DOING,
        creatorId: currentUser?._id,
      };

      await apis.todo.create(newTask);
      handleAfterCreateSuccess();
    } catch (error) {
      toast.error(error);
    }
  }

  function onChange(event) {
    const title = event.target.value;
    setTodoTitles(title);
  }

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
