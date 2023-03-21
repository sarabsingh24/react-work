import React from 'react';
import { links } from './data.js'


export default function Navlinks({ showMenu}) {
    return (
        <>
            {
                links.map((link,index) => {
                    const {id,url,name} = link;
                    return (
                     
                        <a key={index} href={url}  className="link">{name}</a>
                          
                    )
                })
            }
        </>
          
        
    )
}
