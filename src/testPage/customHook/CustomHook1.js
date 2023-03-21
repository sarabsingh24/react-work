import React from "react";
import CommonFun from "./CommonFunc";

export default function CustomHook1() {
  const [count, incrementHandler, decrementHandler, reset] = CommonFun(0, 5);

  return (
    <div>
      <h1>Counter1 {count}</h1>
      <button onClick={incrementHandler}>Counter Increment</button>
      <button onClick={decrementHandler}>Counter Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
