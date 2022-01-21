import React, {useState, useEffect} from "react";

function Timer(pros){
    const {startTimingAt, stopCounting} = pros;
    const [startAt, setTimer] = useState(startTimingAt);

    useEffect(() => {
        setInterval(() => {
            setTimer(time => time - 1);
        }, 1000)
    }, [])
    
    useEffect(() => {
        if (startAt <= 0) stopCounting();
    }, [startAt])

    return (
        <div>
            <p>{startAt}</p>
        </div>
    )
}

export default Timer