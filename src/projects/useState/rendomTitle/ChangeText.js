import React from "react";

export default function ChangeText({ text, setText }) {
  const changeTextHandler = () => {
    if (text == "Hello world") {
      setText("Some Text");
    } else {
      setText("Hello world");
    }
  };

  return (
    <div>
      <h4>{text}</h4>
      <button onClick={changeTextHandler}>Click to change</button>
    </div>
  );
}
