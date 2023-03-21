import React from 'react'
import { useGlobalContext } from './Context';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

export default function Slidemenu() {
    const { menu, slideMenu, setSlideMenu } = useGlobalContext();
 
    return (
      
        <div className={slideMenu ? "slide-menu show" : "slide-menu"}>
            <IconButton className="cross-icon" onClick={() => setSlideMenu(!slideMenu) }><CancelIcon /></IconButton>
            {
                menu.map((item,index) => {
                    const { page, sublinks} = item;
                return <div key={index}>
                    <h3 key={index}>{page}</h3>
                    <ul>
                    {
                        sublinks.map((link,index)=>{
                            const { url,icon,name} = link
                            return <li key={index} className="sublink"><span className="icon-pos">{icon}</span><a href={url} >{name}</a></li>
                        })
                        }
                    </ul>
                </div>
                })
            }
        </div>
    )
}
