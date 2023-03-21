import React from "react";

export default function CounterDelat() {
  const [counter, setCounter] = React.useState(0);

  const increaseNumber = () => {
    setTimeout(() => {
      setCounter((prevValue) => prevValue + 1);
    }, 2000);
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
