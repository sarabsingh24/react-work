import React from "react";
import { Link, useParams } from "react-router-dom";
const person = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
export default function Items() {
  return (
    <>
      <h1>Items</h1>
      <Link to={`/items/${person.id}`}>View Item Detail Page</Link>
    </>
  );
}
