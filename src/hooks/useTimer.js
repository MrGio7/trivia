import { useEffect, useRef, useState } from "react";

export default function useTimer(time) {
  const [timer, setTimer] = useState(time);
  const intervalRef = useRef()

  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setInterval(() => setTimer(timer - 1), 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return {timer, setTimer}
}
