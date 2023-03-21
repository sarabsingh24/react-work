import React from 'react';
import './style.css'

export default function Display({ list }) {
   


  return (
   
      <div className="menu-container">
        {list.map((items) => {
          const { id, title, category, price, img, desc } = items;
          return (
            <article id={id} className="item-box">
              <div className="img-box">
                <img src={img} alt={category} />
                <span className="menu-price">${price}</span>
              </div>
              <div className="item-info">
                <h5 className="title">{title}</h5>
                <p className="para-graph">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    
  );
}
