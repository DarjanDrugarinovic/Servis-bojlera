import { useCallback } from "react";

export const useTimeout = () => {
  const timeout = useCallback(
    (delay: number) => new Promise((res) => setTimeout(res, delay)),
    []
  );

  return {
    timeout,
  };
};
