import React from "react";

const HighOrderFunction = (NewComponent, increment) => {
  const InsideComponent = () => {
    const [count, setCount] = React.useState(0);

    const changeHandeler = () => {
      setCount(count + increment);
    };

    return <NewComponent name={count} change={changeHandeler} />;
  };
  return InsideComponent;
};
export default HighOrderFunction;
