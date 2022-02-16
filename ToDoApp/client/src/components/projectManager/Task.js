import React, { useEffect, useState } from "react";

function Task(props) {

    const {
        nameTask,
        status,
    } = props

    const [isDone, setHasDone] = useState(status)

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
                onClick={() => 
                    setHasDone(isDone ? false : true)
                }
                
            >
            </input>
        </li>
    )
}

export default Task
