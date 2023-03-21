import React from "react";
import ComponentB from "./ComponentB";
const persons = [
  {
    id: 1,
    name: "sarab",
    age: 44,
    img: {
      url:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIWI-Vie0F8LOQdEAfmdLeoIX78YP5tttos76Zk-xzoSDAw2_ppYwSAUlJpiRa-t33pCTiDSR4_g&usqp=CAc",
    },
  },
  {
    id: 2,
    name: "armin",
    age: 12,
    img: {
      url:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIWI-Vie0F8LOQdEAfmdLeoIX78YP5tttos76Zk-xzoSDAw2_ppYwSAUlJpiRa-t33pCTiDSR4_g&usqp=CAc",
    },
  },
  { id: 3, name: "", age: null, img: { url: "" } },
];

export default function ComponentA() {
  return (
    <>
      {persons.map((items) => {
        return <ComponentB {...items} key={items.id} />;
      })}
    </>
  );
}
