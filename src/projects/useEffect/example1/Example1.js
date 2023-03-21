import React from "react";

export default function Example1() {
  const [value, setValue] = React.useState(1);

  React.useEffect(() => {
    if (value > 6) {
      console.log("sarab");
    }
  }, [value]);


    React.useEffect(() => {
       console.log("hello world")
    }, []);

  return (
    <div>
      <h4>{value}</h4>
      <button onClick={() => setValue(value + 1)}>click</button>
    </div>
  );
}
