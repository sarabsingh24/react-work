import React from 'react'

export default function Tab({ list, tabHandler,value }) {
  return (
    <div className="list-box">
      {list.map((item, index) => (
        <h4
          key={item.id}
          className={`text-sty ${index === value && "active"}  `}
          onClick={() => tabHandler(index)}

        >
          {item.company}
        </h4>
      ))}
    </div>
  );
}
