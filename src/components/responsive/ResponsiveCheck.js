import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export function ResponsiveCheck() {
  const IsDesktop = useMediaQuery("(min-width:600px)");
  return { IsDesktop };
}
