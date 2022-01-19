import { useCallback, useEffect, useState } from "react";

import TodoItem from "../TodoItem";
import "./styles.css";
import { getTasksData } from "../../apis/task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    const tasksData = await getTasksData();

    setTasks(tasksData);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <ul className="todo-list">
      {Array.isArray(tasks) &&
        tasks.map((task, index) => {
          return (
            <li key={index}>
              <TodoItem title={task.title} />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
