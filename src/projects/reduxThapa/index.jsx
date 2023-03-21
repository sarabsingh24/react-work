import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";
export default function Index() {
  const state = useSelector((state) => state.changeStateNumber);
    const dispatch = useDispatch();
    console.log(state)
  return (
    <div>
          <button onClick={() => dispatch(decrement('Armin'))}>-</button>
      <h5>{state.count}</h5>
      <h5>{state.name}</h5>
          <button onClick={() => dispatch(increment('sarab'))}>+</button>
    </div>
  );
}
