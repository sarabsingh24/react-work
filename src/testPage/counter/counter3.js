import React, { useReducer } from "react";

const increment = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return increment;
    default:
      return state;
  }
};

export default function Counter1() {
  const [count, dispatch] = useReducer(reducer, increment);
  const [countTwo, dispatchTwo] = useReducer(reducer, increment);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>{countTwo}</div>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}
