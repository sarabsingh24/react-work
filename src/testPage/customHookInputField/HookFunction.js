import React from "react";

export default function HookFunction(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };

  const bindValue = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bindValue, reset];
}
