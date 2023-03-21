import React from "react";
import { links, social } from "./data";
import "./style.css";

import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import PolymerIcon from "@material-ui/icons/Polymer";

import { useGlobalContext } from "./Context";

export default function Sidenav() {
  const { showMenu, showHideMenu } = useGlobalContext();

  return (
    <div>
      <div className={showMenu ? "side-nav-box show-menu" : "side-nav-box"}>
        <PolymerIcon className="logo" />

        <IconButton onClick={showHideMenu} className="cross-icon">
          <CancelIcon />
        </IconButton>
        
        <ul>
          {links.map((link, index) => {
            const { id, url, icon, name } = link;
            return (
              <li key={index} className="links-box">
                <a href={url} className="links">
                  <span className="link-icon">{icon}</span>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="social-media">
          {social.map((ioc, index) => {
            const { id, icon, url } = ioc;
            return (
              <a href={url} key={index}>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
