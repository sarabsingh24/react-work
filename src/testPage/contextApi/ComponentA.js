import React from "react";
import ComponentB from "./ComponentB";
import { Provider } from "./Context";

export default function ComponentA() {
  return (
    <Provider value="sarab Singh">
      <ComponentB />
    </Provider>
  );
}
