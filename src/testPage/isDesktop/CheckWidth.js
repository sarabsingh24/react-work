import React from "react";
import { GetWinSize } from "./GetWinSize";
export default function CheckWidth() {
  const { IsDesktop } = GetWinSize();
  return (
    <div style={{ fontSize: "4rem" }}>{IsDesktop ? "Desktop" : "Mobile"}</div>
  );
}
