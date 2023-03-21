import React from "react";
import ComponentD from "./ComponentD";
import { Provider } from "./Context";
export default function ComponentC() {
  return (
    <Provider value="Armin">
      <ComponentD />
    </Provider>
  );
}
