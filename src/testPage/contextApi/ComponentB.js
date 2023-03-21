import React from "react";
import { Consumer } from "./Context";

export default function ComponentB() {
  return (
    <Consumer>
      {(user) => {
        return <div> my name is {user}</div>;
      }}
    </Consumer>
  );
}
