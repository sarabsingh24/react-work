import React from 'react';
import {CgCloseO} from 'react-icons/cg';

import { mylinks } from "./sideBarData";

export default function Sidebar({ menuStatus, clickFunction }) {
   
  return (
    <aside>
      <div className={`blanket ${menuStatus ? "show" : "hide"}`}></div>
      <div className={`side-menu ${menuStatus ? "show" : "hide"}`}>
        <CgCloseO className="close-icon" onClick={clickFunction} />
        {mylinks.map((item) => {
          const { id, name, url, icon } = item;
          return (
            <div key={id} className="link">
              <span className="icon"> {icon}</span>
          <span>{name}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
