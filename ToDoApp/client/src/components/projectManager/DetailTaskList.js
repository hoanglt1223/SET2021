import React, { useState, useEffect } from "react"
import Button from "./Button"
import Task from "./Task.js";
import ToolbarTask from "./ToolbarTask";

function DetailTaskList(props) {

    const {
        projectID,
        fetchedTaskList
    } = props

    const [taskList, setTaskList] = useState(fetchedTaskList);



    return (
        <div className="detailTaskList">

            <ToolbarTask
                setTaskList={setTaskList}
                projectID = {projectID}
            />

            <ul className="taskList">
                {taskList.map((task, index) => {
                    return (
                    <Task
                        nameTask={task.taskName}
                        projectID = {projectID}
                        status = {task.isDone}
                        key={index}
                    />
                )})}
            </ul>
        </div>
    )
}

export default DetailTaskList