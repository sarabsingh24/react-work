import React from "react";

export default function CleanupFunction() {
  const [size, setSize] = React.useState(window.innerWidth);

  const cleanUp = () => {
    setSize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", cleanUp);

    return () => {
      console.log("Cleanup");
      window.removeEventListener("resize", cleanUp);
    };
  }, [size]);

  return (
    <div>
      <h4>{size}</h4>
    </div>
  );
}
