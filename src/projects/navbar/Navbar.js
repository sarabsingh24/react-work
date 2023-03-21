import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {Winwidth} from "./Winwidth";
import Navlinks from './Navlinks'
import "./style.css";
export default function Navbar() {
    const { IsDesktop } = Winwidth();
    const [showMenu, setshowMenu] = React.useState(false);
    const linkContainerRef = React.useRef(null);
    const linkRef = React.useRef(null);

    React.useEffect(()=>{
        let linkHeight = linkRef.current.getBoundingClientRect().height;
        console.log(linkContainerRef.current.getBoundingClientRect())
        if (showMenu){
            linkContainerRef.current.style.height = linkHeight + "px";
        } else{
            linkContainerRef.current.style.height = "0px";
        }
        
       
    }, [showMenu])
   
  return (<>
    <div className="header">
              <div className="comp-name">Company Name</div>
              {
              !IsDesktop && <div className="menu-bar" onClick={() => setshowMenu(!showMenu)} ><MenuIcon /></div>
              }
          <div className="menu-container" ref={linkContainerRef}>
              <div className="menu-type" ref={linkRef}>
                  <Navlinks showMenu={showMenu}  />
              </div>
              
              
          </div>
    </div>
      
    </>
  );
}
