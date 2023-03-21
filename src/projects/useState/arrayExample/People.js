import React from "react";

export default function People({ persons, setPersons, removeId }) {
  const { id, name } = persons;

  return (
    <div>
      <span>{id}</span>
      <span>{name}</span>
      <br></br>
      <button onClick={() => removeId(id)}>remove Button</button>
    </div>
  );
}
