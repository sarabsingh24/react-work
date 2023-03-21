import React from "react";

import { useGlobalContext } from "./Context";

export default function Mainlink({ myLinkPosition}) {
  const {
    menu,
    
 
  } = useGlobalContext();

 


  return (
      <>
      
        {menu.map((item, index) => {
          const { page, sublinks } = item;

          return (
            <div
              key={index}
              className="link"
              onMouseOver={(e) => myLinkPosition(e, sublinks)}
            >
              {page}
            </div>
          );
        })}
       
     
    </>
  );
}
