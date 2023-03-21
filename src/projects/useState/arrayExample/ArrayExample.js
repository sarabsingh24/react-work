import React from "react";
import { list } from "./data";
import People from "./People";

export default function ArrayExample() {
  const [persons, setPersons] = React.useState(list);

    const removeId = (id) => {
    console.log(id);
    let findName = persons.filter((person) => person.id !== id);
    console.log(findName);
    setPersons(findName);
  };

  //   const changeNameHandeler = (name) => {
  //     let findName = persons.find((person) => person.name == name);
  //     findName = { ...findName, name: "kamashi" };
  //     let newList = persons.map((person) => {
  //       if (person.name == name) {
  //         person = findName;
  //       }
  //       return person;
  //     });
  //     console.log(newList);
  //     setPersons(newList);
  //   };

  return (
    <div>
      {persons.map((person) => {
        return (
          <People
            key={person.id}
            persons={person}
            setPersons={setPersons}
                removeId={removeId}
          />
        );
      })}
      <button onClick={() => setPersons([])}>clear all</button>
    </div>
  );
}
