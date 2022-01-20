import React, { useState, useEffect } from "react"
import Button from "../button/button"
import Task from "../task/task.js";



function ToolbarTask(props) {
    const [taskInput, setTaskInput] = useState('');

    const {
        setTaskList,
    } = props

    function handleAddTask() {
        if (taskInput) {
            setTaskList(preTaskList => [...preTaskList, taskInput])
            cancelTask();
        }
    }

    function cancelTask(){
        setTaskInput('');
    }
    return (
        <div >
            <input
                type='text'
                placeholder="Enter task..."
                className="taskInput"
                onChange={e => setTaskInput(e.target.value)}
                value={taskInput}
            >
            </input>

            <Button
                titleValue="Add"
                textColor="#333"
                handleOnClick={handleAddTask}
            />

            <Button
                titleValue="Cancel"
                textColor="red"
                handleOnClick = {cancelTask}
            />
        </div>
    )
}

function DetailTaskList(props) {

    const {
        projectName
    } = props

    const [taskList, setTaskList] = useState([]);

    return (
        <div className="detailTaskList">

            <ToolbarTask
                setTaskList={setTaskList}
            />

            <ul className="taskList">
                {taskList.map((task, index) => (
                    <Task
                        nameTask={task}
                        project = {projectName}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default DetailTaskList