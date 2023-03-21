import React, { useState } from "react";
import MousePosition from "./MousePosition";

export default function Test() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>

      {display && <MousePosition />}
    </div>
  );
}
