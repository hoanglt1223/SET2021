import React, { useState, useEffect } from "react";
import Button from "./Button";
import {postMethod} from '../../api'

function ToolbarProject(props) {
    const {
        setProjectList,
    } = props

    const [project, setProject] = useState('')

    function cancelTask() {
        setProject('');
    }

    function handleSubmit() {

        if (project) {
            const newProject = {
                projectName: project,
                taskList: [],
                memberList: [],
                isDeleted: false
            }
            postMethod('add-project', newProject)
            .then(
                response => {
                    newProject._id =JSON.parse(response.data.message);
                    setProjectList(prev => {
                        return [...prev, newProject]
                    });
                }
            )
            
            cancelTask();
        }
    }


    return (
        <div id="ToolbarProject_project">
            <input
                id="addProject__field"
                onChange={e => setProject(e.target.value)}
                value={project}
                onKeyPress={(e) => {
                    if (e.key == "Enter")
                        handleSubmit()
                }
                }
            >
            </input>

            <Button
                titleValue="Add"
                id="addProject__addButton"
                handleOnClick={handleSubmit}
            />

            <Button
                titleValue="Cancel"
                id="addProject__cancelButton"
                handleOnClick={cancelTask}
            />
        </div>
    )
}

export default ToolbarProject