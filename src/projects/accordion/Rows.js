import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import "./style.css";

export default function Rows({ id, title, info, status, changeFun }) {
  return (
    <article key={id} className="text-container">
      <header className="two-column" onClick={() => changeFun(id)}>
        <h5>{title}</h5>
        {status ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
      </header>

      {status ? <p className="tag-info">{info}</p> : ""}
    </article>
  );
}
