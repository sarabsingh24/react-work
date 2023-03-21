import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

export default function MyList({ list, deleteItem, editItem }) {
  return (
    <main className="food-item-show-list">
      {list.map((item) => {
        return (
          <article key={item.id} className="food-item-list-row">
            <div>
              <strong>Name: {item.title}</strong>
              <br />
              <small>Id: {item.id}</small>
            </div>

            <MdModeEdit
              className="food-item-btn-type edit"
              onClick={() => editItem(item.id)}
            />
            <RiDeleteBinLine
              className="food-item-btn-type delete"
              onClick={() => deleteItem(item.id)}
            />
          </article>
        );
      })}
    </main>
  );
}
