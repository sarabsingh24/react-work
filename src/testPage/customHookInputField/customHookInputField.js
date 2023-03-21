import React from "react";
import HookFunction from "./HookFunction";

export default function CustomHookInputField() {
  const [firstname, bindFirstName, resetFirstName] = HookFunction("");
  const [lastname, bindLastName, resetLastName] = HookFunction("");
  

  const showPopup = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <div>
        First Name
        <input type="text" {...bindFirstName} />
      </div>
      <div>
        Last Name
        <input type="text" {...bindLastName} />
      </div>
      <button onClick={showPopup}>submit</button>
    </div>
  );
}
