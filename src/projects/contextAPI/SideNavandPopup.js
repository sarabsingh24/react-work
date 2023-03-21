import React from "react";
import Sidenav from "./Sidenav";
import Home from './Home';
import Popup from './Popup';
import { FirstProvider} from './Context';


export default function SideNavandPopup() {

   
  return <div>
    <FirstProvider>
        <Home   />
        <Sidenav  />
        <Popup />
    </FirstProvider>

  </div>;
}
