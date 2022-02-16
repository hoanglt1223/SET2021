import React, { useEffect, useState } from "react";

function Task(props) {

    const {
        nameTask,
        status = true,
        project = '#'
    } = props

    const [isDone, setHasDone] = useState(status)

    return (
        <li className={`task_${project}`}>
            <input
                defaultValue={nameTask}
            >
            </input>

            <input
                type="checkbox"
                style={{ width: "20px" }}
                defaultChecked={isDone}
            >
            </input>
        </li>
    )
}

export default Task
