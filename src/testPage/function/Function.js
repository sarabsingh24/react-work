import React from "react";

export default function FunctionType() {
  const [name, setName] = React.useState("sarab");

  const changeNameHandeler = (name) => {
    setName(name);
  };

  return (
    <div>
      <h2> {name} </h2>
      {/* <button onClick={changeNameHandeler} value={name}>
        Change Name
      </button> */}
      <button onClick={() => changeNameHandeler("harpreet")} value={name}>
        Change Name
      </button>
    </div>
  );
}
