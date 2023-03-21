import React from "react";
import Listitems from "./listItem";
import { useGlobalContext } from "./context";

export default function List() {
  const {list,increment} = useGlobalContext();
  return (
    <>
      {list.map((item) => {
        return (
          <article className="item_list" key={item.id}>
            <Listitems
              {...item}
         
            />
          </article>
        );
      })}
    </>
  );
}
