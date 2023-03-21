import React from "react";
import Tour from "./Tour";

export default function List({ tour }) {
  return (
    <>
      {tour.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </>
  );
}
