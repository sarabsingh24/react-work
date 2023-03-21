import React from 'react';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function Info({ list }) {
  console.log(list);
    const { title, company , id,duties, dates} = list;
  return (
    <article className="info-box">
      <h4>{title}</h4>
      <small className="dates">{dates} </small>

      {duties.map((list, index) => {
        return (
          <div key={index} className="list-item">
            <ChevronRightIcon className="list-arrow" />
            <p className="list-point">{list}</p>
          </div>
        );
      })}
    </article>
  );
}
