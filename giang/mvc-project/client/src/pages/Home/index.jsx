import { useCallback, useEffect, useState } from "react";

import AddTodoForm from "../../components/AddTodoForm";
import TodoList from "../../components/TodoList";
import apis from "../../apis";
import "./styles.css";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    const todosData = await apis.todo.findAll();

    setTodos(todosData);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="home-page-container">
      <h1>Todo List</h1>
      <AddTodoForm reFetchData={fetchTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default HomePage;
