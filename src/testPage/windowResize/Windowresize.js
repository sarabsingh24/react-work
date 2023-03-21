import React from "react";

export default function Windowresize() {
  const [size, setSize] = React.useState(window.innerWidth);

  const windowSize = () => {
    setSize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", windowSize);
    console.log("sarab");
    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);
  let desktop = size > 600 ? true : false;

  return <div>{size}</div>;
}
