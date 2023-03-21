import React from "react";

export default function UserProp({ children }) {
  const [count, setCount] = React.useState(5);
  const [maxNum, setMaxCount] = React.useState(50);

  return <div>{children(count, maxNum)}</div>;
}
