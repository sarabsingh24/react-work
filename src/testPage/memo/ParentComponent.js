import React from "react";
import MemoComponent from "./MemoComponent";

export default function ParentComponent() {
  const [count, setCount] = React.useState("sarab");

  const ticker = () => {
    setCount("sarab");
  };
  React.useEffect(() => {
    const interval = setInterval(ticker, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  console.log("parent component");
  return (
    <div>
      <MemoComponent counter={count} />
    </div>
  );
}
