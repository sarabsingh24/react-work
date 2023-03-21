import React from "react";
import { useGlobalContext } from './Context';


export default function Sublinks() {
    
    const { linkPosition, linkHeading, subLinks, setSubLinks, pagelink } = useGlobalContext();
    const subLinkContainer = React.useRef(null);
   
    React.useEffect(()=>{
       
        const box = subLinkContainer.current;
        box.style.left = `${linkPosition}px`;
    }, [linkPosition]);

    
    console.log(subLinks)
    return <>
        <div className={subLinks ? "sub-link-box display-blk" : "sub-link-box"} ref={subLinkContainer} >
            <h4>{linkHeading}</h4>
                    <ul >
                        {pagelink && 
                            pagelink.map((item,index) => {
                                const {url,icon, name} = item;
                                return <li key={index} ><span className="icon-pos">{icon}</span><a href={url} >{name}</a></li>
                            })
                        }
                    </ul>
            </div>
        </>
}
