import React from "react";

import ItemSection from "./ItemSection";

export default function ItemList() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    itemList();
  }, []);

  const itemList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setLoading(false);
    setItems(data);
  };
  console.log(items);
  return (
    <div>
      <p>{loading ? "Loading...." : null}</p>
      {items.map((i) => (
        <div key={i.id}>
          <ItemSection id={i.id} image={i.thumbnailUrl} title={i.title} />
        </div>
      ))}
    </div>
  );
}
