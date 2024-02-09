/********************Hooks Custom for check screen size ****************************/

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const isWindowClient= typeof window === "object";
  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  useEffect(() => {
    // handler called on change of the screen resize
    const setSize = () => {
      setWindowSize(window.innerWidth);
    };
    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => {
        window.removeEventListener("resize", setSize);
      };
    }
  }, [isWindowClient]);
  return windowSize;
};
