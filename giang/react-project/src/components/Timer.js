import { useState, useEffect } from "react";

const Timer = (props) => {
  const { seconds, handleAfterFinish } = props;
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    let timeInterval;

    if (timer > 0) {
      timeInterval = setInterval(() => {
        setTimer((currentTimer) => currentTimer - 1);
      }, 1000);
    } else {
      handleAfterFinish();
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);

  return <div>{timer} seconds left.</div>;
};

export default Timer;
