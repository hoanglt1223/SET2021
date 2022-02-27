import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import routes from "./routes";
import UserContext from "./context/user.context";
import { useState } from "react";

const App = () => {
  const [currentUser, setCurrentUser] = useState();

  function saveMe(user) {
    setCurrentUser(user);
  }

  function resetMe() {
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, saveMe, resetMe }}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path={routes.login.value} element={<LoginPage />} />
            <Route path={routes.home.value} element={<HomePage />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
