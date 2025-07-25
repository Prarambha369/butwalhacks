import { useRef, useEffect } from "react";

// A hook that calls a callback at a random interval between minDelay and maxDelay (ms)
export default function useRandomInterval(callback, minDelay, maxDelay) {
  const timeoutId = useRef();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      const handleTick = () => {
        const nextTick =
          Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
        timeoutId.current = setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTick);
      };
      handleTick();
      return () => clearTimeout(timeoutId.current);
    }
    return undefined;
  }, [minDelay, maxDelay]);
}
