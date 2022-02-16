import React from "react";
import ReactDOM from "react-dom";
import ProjectManager from "./components/projectManager/index.js";
import './style.css'
import { ProjectContextProvider, ProjectContextConsumer } from "./context/projectContext.js";
import { getMethod } from './api'




getMethod('projects')
    .then((response) => {
        ReactDOM.render(
            <ProjectContextProvider>
                <ProjectManager
                    projectFetched={response.data}
                />

            </ProjectContextProvider>
            , document.getElementById('root'));
    })


