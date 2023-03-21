import React from "react";

export default function FormArray() {
  const [person, setPerson] = React.useState({
    fname: "",
    age: "",
    email: "",
  });
  const [list, setList] = React.useState([]);

  const changeHandeler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let people = { ...person, id: new Date().getTime().toString() };
    setList([...list, people]);
    setPerson({
      fname: "",
      age: "",
      email: "",
    });
  };

  //   React.useEffect(() => {
  //     console.log(list);
  //   }, [list]);

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="fname"
          value={person.fname}
          onChange={changeHandeler}
        />
        <input
          type="text"
          name="age"
          value={person.age}
          onChange={changeHandeler}
        />
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={changeHandeler}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {list.map((item) => {
            let { id, fname, email, age } = item;
            return (
              <div key={id}>
                <div>{`Id: ${id}`}</div>
                <h4>
                  {`Name: ${fname || "N/A"};`}{" "}
                  {`Email: ${email || "N/A"};  Age is : ${age || "N/A"}`}
                </h4>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
