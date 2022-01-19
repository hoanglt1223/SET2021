import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div className="app-container">
      <HomePage />
      <ToastContainer />
    </div>
  );
};

export default App;
