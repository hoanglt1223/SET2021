import React from "react";
import ReactDOM from "react-dom";
import ProjectManager from "./components/projectManager/index.js";
import UserManager from "./components/userManager/index.js";
import './style.css'
// import axios from "axios"


// const uriServer = "http://localhost:5500/projects";


// axios.get(uriServer, JSON.stringify({}))
//     .then((response) => {
//         ReactDOM.render(<ProjectManager
//             projectFetched = {response.data}
//         />, document.getElementById('root'));
//     })


import { LogInContextProvider } from "./components/login/loginContext.js";

import Login from "./components/login"



ReactDOM.render(
  // <LogInContextProvider>
    <Login/>
  // </LogInContextProvider>,
  ,document.getElementById("root")
);