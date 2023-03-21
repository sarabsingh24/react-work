import React from "react";

function Button({ onClick, children }) {
  console.log("button :" + children);
  return <button onClick={onClick}>{children}</button>;
}
export default React.memo(Button);
