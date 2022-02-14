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
            const newTask = {
                taskName: taskInput,
                isDone: false,
                _id: 'Unknown'
            }
            // PATCH API
            setTaskList(preTaskList => [...preTaskList, newTask])
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