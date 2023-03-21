import React from "react";
import NewImg from "../../assets/room-2.jpeg";
export default function ComponentB({ name, age, img }) {
  const images = img && img.url;
  return (
    <div
      style={{
        border: "1px solid #e1e1e1",
        background: "#f5f5f5",
        marginBottom: "4px",
      }}
    >
      <img src={images || NewImg} />
      <p>
        Name: <span>{name || "Default Name"}</span>
      </p>
      <p>
        Age: <span>{age || "21"}</span>
      </p>
    </div>
  );
}
