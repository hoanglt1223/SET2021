import reactDom from "react-dom";
import React from "react";
import ProjectManager from "../projectManager/index.js";
import LoginContent from "./login"
import SignUp from "../signup"
import Test from "../test"
import {LogInContextProvider} from "./loginContext"
import {SignUpContextProvider} from "../signup/signupContext"

import "./login.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import UserPage from "../user/index.js"
import { LoginContextConsumer } from "./loginContext";
function LogIn(props) {
  return (
    <LogInContextProvider>
      <SignUpContextProvider>
        <Router>
          <Routes>
          
            <Route  path="/" element = {<LoginContent/>}/>
            <Route  path="/user" element = {<UserPage/>}/>
            <Route  path="/admin" element = {<ProjectManager/>}/>
            <Route  path="/signup" element = {<SignUp/>}/>
            <Route  path="/test" element = {<Test/>}/>
          
          </Routes>
        </Router>
      </SignUpContextProvider>
    </LogInContextProvider>

  );
}


export default LogIn