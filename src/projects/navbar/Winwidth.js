import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export function Winwidth() {
    const IsDesktop = useMediaQuery("(min-width:600px)");
    return { IsDesktop };
}
