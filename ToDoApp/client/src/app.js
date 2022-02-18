import reactDom from "react-dom";
import React from "react";
import ProjectManager from "./components/projectManager/index.js";
import LogIn from "./components/login"
import UserManager from "./components/userManager"
import { UserContextProvider } from "./context/userContext.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App(props) {

  return (
        <Router>
          <Routes>
            
            <Route exact path="/" element = {<LogIn/>}/>
            <Route path="/userManagement" element = {
              <UserContextProvider>
                <UserManager
              ></UserManager>
              </UserContextProvider>
            }/>
            <Route path="/projectManagement" element = {      
                <ProjectManager>
                </ProjectManager>     
            }/>
            
            {/* <Route exact path="/signup" element = {<SignUp/>}/> */}
            
          </Routes>
        </Router>

  );
}


export default App