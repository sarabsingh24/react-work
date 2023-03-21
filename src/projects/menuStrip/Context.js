import React,{useContext} from 'react';
import { menu } from './data';

const AppContext = React.createContext();


export const AppProvider = ({children}) => {
    const [subLinks, setSubLinks] = React.useState(false);
    const [slideMenu, setSlideMenu] = React.useState(false);
    const [pagelink,setPagelink] = React.useState([]);
    const [linkPosition, setLinkPosition] = React.useState({});
    const [linkHeading, setLinkHeading] = React.useState(null);

    const pageSublink = (center, links, pageName) => {
        setLinkPosition(center)
        setPagelink(links);
        setLinkHeading(pageName)
        setSubLinks(true)
    }
  const closeSubmenu = () =>{
      console.log("fffff");
      setSubLinks(false);
  }

React.useEffect(()=>{
    console.log(subLinks)
}, [subLinks])


    return <AppContext.Provider value={{ menu, slideMenu, setSlideMenu, subLinks, setSubLinks, pagelink, pageSublink, linkPosition, linkHeading, closeSubmenu }}>
        {children}
    </AppContext.Provider>
}

 export const useGlobalContext = () => {
    return useContext(AppContext);
} 


