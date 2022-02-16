import React, { useState, useEffect } from "react"
import Button from "./Button"
import Task from "./Task.js";
import ToolbarTask from "./ToolbarTask";

function DetailTaskList(props) {

    const {
        projectName,
        fetchedTaskList
    } = props

    const [taskList, setTaskList] = useState(fetchedTaskList);

    return (
        <div className="detailTaskList">

            <ToolbarTask
                setTaskList={setTaskList}
            />

            <ul className="taskList">
                {taskList.map((task, index) => {
                    return (
                    <Task
                        nameTask={task.taskName}
                        project = {projectName}
                        key={index}
                    />
                )})}
            </ul>
        </div>
    )
}

export default DetailTaskList