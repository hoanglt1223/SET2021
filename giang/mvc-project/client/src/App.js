import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
