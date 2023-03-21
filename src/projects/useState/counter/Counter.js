import React from "react";

export default function Counter() {
  const [value, setValue] = React.useState(0);

  const increaseHandeler = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <div>
      <h4>Heading</h4>
      <p>{value}</p>
      <button onClick={increaseHandeler}>Increase</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
    </div>
  );
}
