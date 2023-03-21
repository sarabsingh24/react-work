import React from "react";

export default function CommonFunc(increment = 0, value) {
  const [count, setCount] = React.useState(increment);
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(increment);
  };

  return [count, incrementHandler, decrementHandler, reset];
}
