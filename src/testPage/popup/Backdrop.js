import React from "react";
import "./popup.css";

export default function Backdrop({ show }) {
  const cssClass = ["backdrop", show ? "display-block" : "display-none"];
  return (
    <>
      <div className={cssClass.join(" ")}></div>
    </>
  );
}
