import React, { useState, useEffect } from "react";
import Timer from "./timer"
import "./App.css";


function App() {

    const [timeInput, setTimer] = useState(0);
    const [startTiming, setStartingTiming] = useState(false);

    function handleStopTiming() {
        setStartingTiming(false);
    }

    function handleStartTiming() {
        setStartingTiming(true);
    }

    function setStartTimerAt(e) {
        setTimer(e.currentTarget.value);
    }
    return (
        <React.Fragment>
            <input type="text" onChange={setStartTimerAt}></input>
            <button onClick={handleStartTiming}>Start</button>
            {startTiming && (
                <Timer
                    startTimingAt={timeInput} 
                    stopCounting={handleStopTiming}
                />
            )}

        </React.Fragment>

    );

}

export default App;