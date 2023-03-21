import React from "react";

function MemoComponent({ counter }) {
  console.log("child component");
  return <div>Number Count: {counter}</div>;
}
export default React.memo(MemoComponent);
