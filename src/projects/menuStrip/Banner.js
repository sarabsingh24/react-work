import React from "react";
import Menu from "./Menu";
import { useGlobalContext } from "./Context";
export default function Banner() {
    const {  closeSubmenu } = useGlobalContext();

    const handler =(e)=> {
        console.log(e.target);
        // closeSubmenu()
    }
  return (
      <div className="banner-bg" onMouseOver={handler}>
      <Menu />
    </div>
  );
}
