import React, { useState } from "react";
import TimerMountUnmount from "./TimerMountUnmount";
export default function Unmount() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <TimerMountUnmount />}
    </div>
  );
}
