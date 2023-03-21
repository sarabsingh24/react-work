import React from "react";
import { data } from "./data";

export default function Index() {
  const [people, setPeople] = React.useState(data);

  const removeHandel = (id) => {
      setPeople((people)=> {
          return people.filter(person => person.id !== id)
      })
  }
  return (
    <div>
          <List people={people} removeHandel={removeHandel} />
    </div>
  );
}
const List = ({ people, removeHandel }) => {
  return (
    <>
      {people.map((person) => {
          return <Element key={person.id} {...person} removeHandel={removeHandel} />;
      })}
    </>
  );
};

const Element = ({ id, name, removeHandel }) => {
  return (
    <>
<h4>my name is {name}</h4>
          <button  onClick={() =>removeHandel(id)}>remove</button>
    </>
  );
};
