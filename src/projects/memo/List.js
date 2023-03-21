import React from "react";
import Group from "./Group";

function List({ url }) {
  console.log("Big list");
  return (
    <div>
      {url.map((item) => (
        <Group key={item.id} item={item} />
      ))}
    </div>
  );
}

export default React.memo(List);
