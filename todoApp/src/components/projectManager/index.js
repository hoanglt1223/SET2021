import React, { useState, useEffect } from "react";
import Project from "../project";
import Toolbar from "./toolbar.js";
import './projectManager.css'

function ProjectManager() {
    const [projectList, setProjectList] = useState([])

    return (
        <React.Fragment>

            <Toolbar
                setProjectList = {setProjectList}
            />

            <ul id="projectlist">
                {projectList.map((project, index) => (
                    <Project
                        nameProject={project}
                        taskList={[]}
                        memberList={[]}
                        isDeleted={false}
                        key={index}
                    />
                ))}
            </ul>


        </React.Fragment>


    )
}

export default ProjectManager;