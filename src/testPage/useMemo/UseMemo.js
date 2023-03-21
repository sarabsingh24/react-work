import React, { useState, useMemo, useEffect } from "react";

export default function UseMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("use memo");
    let i = 0;
    while (i < 200000000) i++;

    return countOne % 2 == 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Increment One {countOne} </button>
        <span> {isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Increment Two {countTwo} </button>
      </div>
    </div>
  );
}
