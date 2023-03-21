import React from "react";
import "./popup.css";

export default function PopupBox({ show, close }) {
  const cssClasses = ["popupBox", show ? "display-block" : "display-none"];
  return (
    <>
      <div className={cssClasses.join(" ")}>
        <button onClick={close}>close</button>
      </div>
    </>
  );
}
