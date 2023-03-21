import React from "react";
import { Redirect } from "react-router-dom";

export default function Admin() {
  const [logout, setLogout] = React.useState(false);
  const token = localStorage.getItem("token");
  const logoutHandeler = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };
  console.log(token);
  return (
    <div>
      {!token && <Redirect to="/" />}
      You are succesfully log in
      {logout && <Redirect to="/" />}
      <button onClick={logoutHandeler}>logout</button>
    </div>
  );
}
