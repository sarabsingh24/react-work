import React from "react";

export default function ItemDetail({ match }) {
  const [item, setItem] = React.useState({});
  console.log(item);

  React.useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const itemData = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
    );
    const itemresponse = await itemData.json();
    setItem(itemresponse);
    console.log(itemresponse);
  };

  return (
    <div>
      {item.id}
      <img src={item.thumbnailUrl} alt="" />
    </div>
  );
}
