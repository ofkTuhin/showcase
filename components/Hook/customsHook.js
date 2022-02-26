import { useEffect, useRef } from "react";

const usePrevious = (inputData) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = inputData;
  });
  return ref.current;
};

export default usePrevious;
