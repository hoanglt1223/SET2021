import { useCallback, useEffect, useState } from "react";

import AddTodoForm from "../../components/AddTodoForm";
import TodoList from "../../components/TodoList";
import apis from "../../apis";
import "./styles.css";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    const tasksData = await apis.task.findAll();

    setTasks(tasksData);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="home-page-container">
      <h1>Todo List</h1>
      <AddTodoForm reFetchData={fetchTasks} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default HomePage;
