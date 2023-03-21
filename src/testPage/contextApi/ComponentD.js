import React from "react";
import { Consumer } from "./Context";
export default function ComponentD() {
  return (
    <Consumer>
      {(newName) => {
        return <div>my daughter name {newName}</div>;
      }}
    </Consumer>
  );
}
