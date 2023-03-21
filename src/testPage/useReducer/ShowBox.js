import React from "react";

export default function ShowBox({ content }) {
  return (
    <div>
      <p>
        People:{" "}
        {content.people.map((name) => {
          return (
            <span key={name}>
              <span>{name}, </span>
            </span>
          );
        })}
      </p>
      <p>Content: {content.modalContant}</p>
      <p>number: {content.num}</p>
    </div>
  );
}
