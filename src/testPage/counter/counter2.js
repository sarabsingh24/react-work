import React, { useReducer } from "react";

const increment = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return increment;
    default:
      return state;
  }
};

export default function Counter2() {
  const [count, dispatch] = useReducer(reducer, increment);

  return (
    <div>
      <div>counter in object: {count.firstCounter}</div>
      <div>counter in object: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
