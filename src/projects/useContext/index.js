import React from "react";
import { data } from "./data";

const MyContext = React.createContext();

export default function Index() {
  const removeHandel = (id) => {
    console.log(id);
  };

  const [people, setPeople] = React.useState(data);
  return (
    <MyContext.Provider value={{ removeHandel }}>
      <List people={people} />
    </MyContext.Provider>
  );
}

const List = ({ people }) => {
  return (
    <>
      {people.map((item) => {
        return <Person {...item} />;
      })}
    </>
  );
};

const Person = ({ id, name }) => {
  const store = React.useContext(MyContext);

  return (
    <div>
      <h4>my name is {name}</h4>
          <button onClick={() => store.removeHandel(id)}>click</button>
    </div>
  );
};
