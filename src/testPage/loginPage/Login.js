import React from "react";
import { Redirect } from "react-router-dom";

const person = {
  name: "sarab",
  password: "123456",
};
const items = {
  name: "",
  password: "",
};

export default function Login() {
  const [item, setitem] = React.useState(items);
  const [logined, setLogined] = React.useState(false);

  const changeValueHandler = (e) => {
    setitem({ ...item, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (person.name == item.name && person.password == item.password) {
      localStorage.setItem("token", "asdfghjkl");
      return setLogined(true);
    }
  };

  return (
    <div>
      {logined && <Redirect to="/admin" />}
      <form onSubmit={submitForm}>
        <p>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={changeValueHandler}
          />
        </p>
        <p>
          <input
            type="text"
            name="password"
            value={item.password}
            onChange={changeValueHandler}
          />
        </p>
        <p>
          <input type="submit" value="submit" />
        </p>
      </form>
    </div>
  );
}
