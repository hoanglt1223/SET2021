import React, { useState, useEffect } from "react";
import Project from "./Project";
import ToolbarProject from "./ToolbarProject.js";
import './projectManager.css'
import { ProjectContext } from '../../context/projectContext'


function ProjectManager() {
    const { projectList, setProjectList } = useContext(ProjectContext);
    return (
        <React.Fragment>
            <p id = "project__title">PROJECT MANAGER</p>
            <ToolbarProject
                setProjectList={setProjectList}
            />

            <ul id="projectlist">
                {projectList.map((project, index) => {
                    return (
                        <Project
                            nameProject={project.projectName}
                            taskList_props={project.taskList}
                            memberList={project.memberList}
                            isDeleted={project.isDeleted}
                            id={project._id}
                            key={index}
                        />
                    )
                })}
            </ul>


        </React.Fragment>
    )



}

export default ProjectManager;