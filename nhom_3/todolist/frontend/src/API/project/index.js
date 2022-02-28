//API_URL from env
const API_URL = "http://localhost:8000";

export const getProjectById = async (projectId) => {
  try {
    const response = await fetch(`${API_URL}/find-project`, {
      method: "POST",
      body: JSON.stringify(projectId),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProject = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProject = async (project) => {
  try {
    const response = await fetch(`${API_URL}/project`, {
      method: "POST",
      body: JSON.stringify(project),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const editProject = async (project) => {
  try {
    const response = await fetch(`${API_URL}/edit-project`, {
      method: "PATCH",
      body: JSON.stringify(project),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await fetch(`${API_URL}/delete-project`, {
      method: "DELETE",
      body: JSON.stringify(projectId),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
