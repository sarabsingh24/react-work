import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export function WindowWidth() {
  const IsDesktop = useMediaQuery("(min-width:600px)");
  return { IsDesktop };
}
