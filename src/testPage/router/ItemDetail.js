import React from "react";
import { useParams } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function ItemDetail() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  const persons = async () => {
    let response = await fetch(url);
    let user = await response.json();
    let newData = user.filter((item) => item.id == parseInt(id));
    setData(newData);
    setLoading(false);
  };

  React.useEffect(() => {
    persons();
  }, []);

  return (
    <div>
      {loading ? "Loading...." : null}
      {data.map((k) => {
        return <h2 key={k.id}>{k.title}</h2>;
      })}
    </div>
  );
}
