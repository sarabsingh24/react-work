import React from "react";

const persons = {
  name: "sarab",
  age: 45,
  company: "kent",
};

export default function ObjectExample() {
  const [people, setPeople] = React.useState(persons);
  const { name, age, company } = people;

  const changeHandeler = () => {
    setPeople({ ...people, company: "R Systems" });
  };
  return (
    <div>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{company}</h4>
      <button onClick={changeHandeler}>change</button>
    </div>
  );
}
