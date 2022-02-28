//API_URL from env
const API_URL = "http://localhost:8000";

export const getProjectUserById = async (projectuserId) => {
  try {
    const response = await fetch(`${API_URL}/find-project-user`, {
      method: "POST",
      body: JSON.stringify(projectuserId),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProjectUser = async () => {
  try {
    const response = await fetch(`${API_URL}/project-users`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProjectUser = async (projectuser) => {
  try {
    const response = await fetch(`${API_URL}/project-users`, {
      method: "POST",
      body: JSON.stringify(projectuser),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const editProjectUser = async (projectuser) => {
  try {
    const response = await fetch(`${API_URL}/edit-project-user`, {
      method: "PATCH",
      body: JSON.stringify(projectuser),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
