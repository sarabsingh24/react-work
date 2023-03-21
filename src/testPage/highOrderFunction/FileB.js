import React from "react";
import HighOrderFunction from "./HighOrderFunction";

function FileB(props) {
  const { name, change } = props;
  return (
    <div>
      my last name is Singh {name}
      <button onClick={change}>Click From file B</button>
    </div>
  );
}
export default HighOrderFunction(FileB, 10);
