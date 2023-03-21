import React, { useState, useEffect, useRef } from "react";

export default function UseRef() {
  const [timer, setTimer] = useState(0);
  const inputRef = useRef("singh");

  useEffect(() => {
    inputRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(inputRef.current);
    };
  }, []);

  return (
    <div>
      Timer: {timer}
      <button onClick={() => clearInterval(inputRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}
