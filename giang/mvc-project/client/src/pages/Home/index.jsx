import { useCallback, useEffect, useState } from "react";

import AddTodoForm from "../../components/AddTodoForm";
import TodoList from "../../components/TodoList";
import apis from "../../apis";
import "./styles.css";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const todosData = await apis.todo.findAll();

    setTodos(todosData);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="home-page-container">
      <h1>Todo List</h1>
      <AddTodoForm reFetchData={fetchTodos} />
      <TodoList todos={todos} reFetchData={fetchTodos} />
    </div>
  );
};

export default HomePage;
