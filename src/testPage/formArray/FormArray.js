import React from "react";

export default function FormArray() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [list, setList] = React.useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let person = { id: new Date().getTime().toString(), name, email };
    setList([...list, person]);
    setName("");
    setEmail("");
  };

  React.useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {list.map((person) => {
            let { id, name, email } = person;
            return (
              <div key={id}>
                <h4>
                  {name} {`Email: ${email}`}
                </h4>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
