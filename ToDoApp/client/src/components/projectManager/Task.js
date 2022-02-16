import React, { useEffect, useState } from "react";

function Task(props) {

    const {
        nameTask,
        status,
        id
    } = props

    const [isDone, setHasDone] = useState(status)

    function handleDoneTask() {
        console.log(id);
        setHasDone(isDone ? false : true)

    }

    return (
        <li className={`task`}>
            <input
                style={{ paddingLeft: '15px' }}
                defaultValue={nameTask}
            >
            </input>

            <input
                type="checkbox"
                style={{ width: "20px", marginBottom: '10px' }}
                defaultChecked={isDone}
                onClick={handleDoneTask}

            >
            </input>
        </li>
    )
}

export default Task
