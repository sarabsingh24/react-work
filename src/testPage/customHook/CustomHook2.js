import React from "react";
import CommonFun from "./CommonFunc";

export default function CustomHook2() {
  const [count, incrementHandler, decrementHandler, reset] = CommonFun(10, 10);

  CommonFun();
  return (
    <div>
      <h1>Counter2 {count}</h1>
      <button onClick={incrementHandler}>Counter Increment</button>
      <button onClick={decrementHandler}>Counter Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
