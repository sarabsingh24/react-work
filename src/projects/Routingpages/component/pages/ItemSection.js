import React from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
export default function ItemSection({ id, image, title }) {
  return (
    <div>
      <p>Id : {id}</p>
      <img src={image} alt="test" />
      <p>{title}</p>
      <Link to={`/itemlist/${id}`}>view Detail</Link>
    </div>
  );
}
