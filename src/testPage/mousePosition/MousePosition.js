import React, { useState, useEffect } from "react";

export default function MousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("set cordinate");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("test scrooll");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      x = {x} ; y = {y}
    </div>
  );
}
