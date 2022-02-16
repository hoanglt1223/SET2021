import React, { useState } from 'react'
import Button from './Button';
import { updateMethod } from '../../api'

function ToolbarTask(props) {
    const [taskInput, setTaskInput] = useState('');

    const {
        setTaskList,
        projectID, 
    } = props

    function handleAddTask() {
        if (taskInput) {
            const newTask = {
                taskName: taskInput,
                isDone: false,
                projectID: projectID
            }
            updateMethod('add-task', newTask).then(response => {
                setTaskList(preTaskList => [...preTaskList, newTask])
            })
            cancelTask();
        }
    }

    function cancelTask() {
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
                handleOnClick={cancelTask}
            />
        </div>
    )
}


export default ToolbarTask