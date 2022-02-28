//API_URL from env
const API_URL = "http://localhost:8000";

export const getTaskById = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/find-task`, {
      method: "POST",
      body: JSON.stringify(taskId),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTask = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (task) => {
  try {
    const response = await fetch(`${API_URL}/edit-task`, {
      method: "PATCH",
      body: JSON.stringify(task),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/delete-task`, {
      method: "DELETE",
      body: JSON.stringify(taskId),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};