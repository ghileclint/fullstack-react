import { useEffect, useState } from "react";

export function Stopwatch() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startBtn = () => {
    setIsRunning(true);
  };

  const stopBtn = () => {
    setIsRunning(false);
  };

  const resetBtn = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <div>Stop Watch</div>

      <p>Timer: {seconds}</p>

      <div className="border p-2 w-fit flex gap-2 rounded-md">
        <button
          onClick={startBtn}
          className="bg-amber-50 text-blue-600 px-2 rounded-sm"
        >
          Start
        </button>
        <button
          onClick={stopBtn}
          className="bg-amber-50 text-blue-600 px-2 rounded-sm"
        >
          Stop
        </button>
        <button
          onClick={resetBtn}
          className="bg-amber-50 text-blue-600 px-2 rounded-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
