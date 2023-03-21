import React, { useEffect } from "react";
import RefComponent from "./RefComponent";

export default function CheckRef() {
  const focusField = React.useRef();
  const focusInput = React.useRef();

  const focusOnInput = () => {
    focusInput.current.focusInputMethod();
  };

  const getValueHandeler = (e) => {
    e.preventDefault();
    console.log(focusField.current.value);
  };

  useEffect(() => {
    focusField.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={getValueHandeler}>
        <input type="text" ref={focusField} />
        <button type="submit">check Value</button>
      </form>

      <RefComponent ref={focusInput} />
      <button onClick={focusOnInput}>ghjghjhg</button>
    </div>
  );
}
