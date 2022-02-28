// import { setItemWithSession } from "./process-data";
import { getUserById } from "../API/user";

export function doLogOut() {
  localStorage.setItem("isRemember", false);
  localStorage.removeItem("todoToken");
  sessionStorage.removeItem("todoToken");
  return;
}

export function checkIsLogin() {
  if (checkIsRemember()) {
    return getItemFromLocal("isLogin");
  }
  return JSON.parse(sessionStorage.getItem("isLogin"));
}

export function checkAdmin() {
  // const welcomeContent = document.getElementById("welcome-message");
  const currentUser = getItemFromLocal("currentUser");
  if (currentUser.isAdmin !== true) {
    window.location.href = "/";
  }
}

export function checkIsRemember() {
  return getItemFromLocal("isRemember");
}

export function getItemFromLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setItemToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getTaskFromLocal() {
  return getItemFromLocal("taskList") || [];
}

export function resetForm() {
  const inputText = document.getElementById("add-task-field");
  document.querySelector(".button-update-task").style.display = "none";
  document.querySelector(".button-add-task").style.display = "inline";
  inputText.value = "";
}

export async function getCurrentInfomation() {
  const currentUserId = localStorage.getItem("userId");
  const requestId = {
    _id: currentUserId,
  };
  const currentUser = await getUserById(requestId);
  console.log(currentUser);
  if (!currentUser?.isAdmin) {
    window.location.href = "/";
    alert("You are not admin");
  }
}