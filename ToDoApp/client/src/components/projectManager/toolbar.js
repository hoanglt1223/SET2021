import React, { useState, useEffect } from "react";
import Button from "../project/button/button";
import axios from "axios";

function Toolbar(props) {
    const {
        setProjectList,
    } = props

    const [project, setProject] = useState('')

    function cancelTask() {
        setProject('');
    }

    function handleSubmit() {
        const uriServer = "http://localhost:5500/add-project";

        if (project) {
            const newProject = {
                projectName: project,
                taskList: [],
                memberList: [],
                isDeleted: false
            }
            axios.post(uriServer, JSON.stringify(newProject))
            setProjectList(prev => {
                return [...prev, newProject]
            });
            cancelTask();
        }
    }



    return (
        <div id="toolbar_project">
            {/* //===== field */}
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

            {/* =======add button */}
            <Button
                titleValue="Add"
                id="addProject__addButton"
                handleOnClick={handleSubmit}
            />

            {/* //=======cancel button */}
            <Button
                titleValue="Cancel"
                id="addProject__cancelButton"
                handleOnClick={cancelTask}
            />
        </div>
    )
}

export default Toolbar