import React, { useContext } from "react";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { amount } = useGlobalContext();

  return <div>my cart {amount} </div>;
}
