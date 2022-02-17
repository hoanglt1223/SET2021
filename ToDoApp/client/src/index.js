import React from "react";
import ReactDOM from "react-dom";
import ProjectManager from "./components/projectManager/index.js";
import './style.css'
import { ProjectContextProvider } from "./context/projectContext.js";



ReactDOM.render(
    <ProjectContextProvider>
        <ProjectManager
        />
    </ProjectContextProvider>
    , document.getElementById('root'));

