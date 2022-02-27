import { useContext, useEffect, useState } from "react";

import AddTodoForm from "../../components/AddTodoForm";
import TodoList from "../../components/TodoList";
import apis from "../../apis";
import "./styles.css";
import UserContext from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
import { AUTHORIZATION_KEY } from "../../constants";

const HomePage = () => {
  const navigator = useNavigate();
  const [todos, setTodos] = useState([]);
  const userContext = useContext(UserContext);
  const currentUser = userContext?.currentUser;

  async function fetchTodos() {
    const todosData = await apis.todo.findAll();

    setTodos(todosData);
  }

  function onClickLogoutButton() {
    localStorage.removeItem(AUTHORIZATION_KEY);
    userContext.resetMe();

    navigator(routes.login.value);
  }

  useEffect(() => {
    if (!currentUser) {
      navigator(routes.login.value);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <section className="header">
        Hi {currentUser?.username}{" "}
        <button onClick={onClickLogoutButton}>Logout</button>{" "}
      </section>
      <section className="content">
        <h1>Todo List</h1>
        <AddTodoForm reFetchData={fetchTodos} />
        <TodoList todos={todos} reFetchData={fetchTodos} />
      </section>
    </div>
  );
};

export default HomePage;
