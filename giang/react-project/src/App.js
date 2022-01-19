import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Timer from "./components/Timer";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const onChangeTimerInput = useCallback((event) => {
    setSeconds(Number(event.currentTarget.value));
  }, []);

  const handleStartTimer = useCallback(() => {
    setIsCounting(true);
  }, []);

  const handleEndTimer = useCallback(() => {
    setIsCounting(false);
    setSeconds("");
  }, []);

  return (
    <div className="container">
      <h3>Count Down</h3>
      <div className="form-group">
        <input
          onChange={onChangeTimerInput}
          disabled={isCounting}
          value={seconds}
        />

        <button onClick={handleStartTimer} disabled={isCounting}>
          Start timer
        </button>
      </div>

      {isCounting ? (
        <Timer seconds={seconds} handleAfterFinish={handleEndTimer} />
      ) : (
        <h1>Happy New Year ^.^</h1>
      )}
    </div>
  );
};

export default App;
