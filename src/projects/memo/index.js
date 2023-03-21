import React from "react";
import List from "./List";
const people = [
  { id: 1, name: "Sarab", info: "my name is Sarab" },
  { id: 2, name: "Armin", info: "my name is Armin" },
  { id: 3, name: "Preeti", info: "my name is Preeti" },
];

export default function Index() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Count</button>
      <List url={people} />
    </div>
  );
}

// const List = React.memo(({ url }) => {
//   console.log("Big list");
//   return (
//     <div>
//       {url.map((item) => (
//         <Group key={item.id} item={item} />
//       ))}
//     </div>
//   );
// });

// const Group = React.memo(({ item }) => {
//   console.count("loading");
//   return <div>{item.name}</div>;
// });
