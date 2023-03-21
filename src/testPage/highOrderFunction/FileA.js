import React from "react";
import HighOrderFunction from "./HighOrderFunction";

function FileA(props) {
  const { name, change } = props;
  return (
    <div>
      mark obtained {name}
      <button onClick={change}>Click From file A</button>
    </div>
  );
}
export default HighOrderFunction(FileA, 4);
