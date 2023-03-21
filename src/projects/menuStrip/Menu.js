import React from 'react';
import Mainlinks from './Mainlink';
import Skype from '../../assets/logo.png'

import Slidemenu from './Slidemenu';
import IconButton from '@material-ui/core/IconButton';
import Sublink from "./Sublinks";
import MenuIcon from '@material-ui/icons/Menu';
import { useGlobalContext} from './Context'
import './style.css';


export default function Menu() {
    const { slideMenu, setSlideMenu, pageSublink,setSubLinks, closeSubmenu, pagelink} = useGlobalContext();
   


    const myLinkPosition = (e, links) => {
        const page = e.target.getBoundingClientRect();
        const pageName = e.target.textContent;
        const center = (page.left + page.right) / 2;
        pageSublink(center, links, pageName);

    };

    const hideSubMenu = (e) => {

        if (!e.target.classList.contains("link")) {
            closeSubmenu();
        }
    };

    return (<>
        <div className="menu" onMouseOver={hideSubMenu}>
            <Slidemenu />
            <div><img src={Skype} alt="logo" className="logo" /></div>
         
            <div className="main-link"><Mainlinks myLinkPosition={myLinkPosition} /></div>
                
            
            <div className="bar-menu" onClick={() => setSlideMenu(!slideMenu)}> <MenuIcon  size="large" /></div>
            <div className="sign-in">Sign In</div>
    
            <Sublink />
      
    </div>

        
       
        
    </>
    )
}
