/********************Hooks Custom for check screen size ****************************/

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const isWindowClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(isWindowClient ? window.innerWidth : undefined);

  useEffect(() => {
    const setSize = () => {
      setWindowSize(window.innerWidth);
    };

    if (isWindowClient) {
      window.addEventListener("resize", setSize);

      return () => {
        window.removeEventListener("resize", setSize);
      };
    }
  }, [isWindowClient]);

  return windowSize;
};