import React from "react";

const employee = [
  { id: 1, name: "sarab" },
  { id: 2, name: "Preet" },
  { id: 3, name: "Armin" },
  { id: 4, name: "singh" },
];

export default function ListofItems() {
  const [persons, setPerson] = React.useState(employee);
  const [value, setValue] = React.useState("sarab");

  const removeHandeler = (id) => {
    let newList = persons.filter((person) => person.id !== id);
    setPerson(newList);
  };

  const changeNameHandeler = (e, id, personIndex) => {
    let persons2 = [...persons];

    let newName = e.target.value;
    let targetPerson = persons2.filter(
      (selectedPerson) => selectedPerson.id == id
    );

    targetPerson = { ...persons2[personIndex], name: newName };

    persons2[personIndex] = targetPerson;

    setPerson(persons2);
  };

  return (
    <>
      <h2>List of Names</h2>
      <small>Remove all and Click on list name to removes</small>
      {persons.map((person, index) => {
        return (
          <div key={person.id}>
            <p
              onClick={() => removeHandeler(person.id)}
              style={{ background: "#e1e1e1", padding: "12px" }}
            >
              {person.name}
            </p>
            <input
              type="text"
              onChange={(e) => changeNameHandeler(e, person.id, index)}
              value={person.name}
            />
          </div>
        );
      })}
      <button onClick={() => setPerson([])}>Clear all</button>
    </>
  );
}
