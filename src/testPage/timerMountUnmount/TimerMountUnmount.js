import React, { useState, useEffect } from "react";

export default function TimerMountUnmount() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("use effect");
  //   document.title = `counter ${count}`;
  // }, [count]);

  const ticker = () => {
    console.log("ticker");
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(ticker, 1000);
    return () => {
      console.log("clear interval");
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
}
