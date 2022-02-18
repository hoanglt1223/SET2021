import reactDom from "react-dom";
import React from "react";
import ProjectManager from "./components/projectManager/index.js";
import LogIn from "./components/login"
import UserManager from "./components/userManager"
import UserContextProvider from "./context/userContext";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

function App(props) {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><LogIn /></Route>
          <Route path="/userManagement"><UserContextProvider><UserManager /></UserContextProvider></Route>
          <Route path="/projectManagement"><ProjectManager /></Route>
          {/* <Route exact path="/signup" element = {<SignUp/>}/> */}
        </Switch>
      </Router>
    </div>

  );
}


export default App