//API_URL from env
const API_URL = "http://localhost:8000";

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/find-user`, {
      method: "POST",
      body: JSON.stringify(userId),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async () => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/edit-user`, {
      method: "PATCH",
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/delete-user`, {
      method: "DELETE",
      body: JSON.stringify(userId),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (user) => {
  try {
    const response = await fetch(`${API_URL}/sign-up`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (user) => {
  try {
    const response = await fetch(`${API_URL}/sign-in`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};