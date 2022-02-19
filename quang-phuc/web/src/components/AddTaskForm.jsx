import React, {useState} from "react";
import {createTask} from "../services/task.service";

function AddTaskForm(props) {
    const [task, setTask] = useState({});
    const addTask = async () => {
      await createTask(task);
      setTask({});
    }
    return(
        <>
            <div className="d-flex justify-content-center mb-5">

                <label htmlFor="newTaskName" className="col-form-label me-3">NewTask:</label>
                <input type="text" id="newTaskName" className="form-control w-50 me-3" onChange={(e) => setTask({...task, taskName: e.target.value})}/>
                <button type="submit" className="btn btn-primary" onClick={ async () => {
                  await addTask();
                  window.location.reload();
                }}>Add new task</button>
            </div>
        </>
    )
}

export default AddTaskForm;