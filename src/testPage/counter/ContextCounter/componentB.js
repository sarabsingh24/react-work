import React, { useContext } from "react";
import { createContext } from "../../../App";

export default function ComponentB() {
  const getState = useContext(createContext);

  return (
    <div>
      component B <br /> Count {getState.stateCount} <br />
      <button
        onClick={() => getState.stateDispatch({ type: "increment", value: 1 })}
      >
        Increment 1
      </button>
      <button
        onClick={() => getState.stateDispatch({ type: "increment", value: 5 })}
      >
        Increment 5
      </button>
      <button onClick={() => getState.stateDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}
