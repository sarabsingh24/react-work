import React from "react";
import "./style.css";

import Person from "./Person";
import { account, status } from "./Data";

export default function StartWork() {
  return (
    <div>
      {account.map((person) => {
        return <Person key={person.id} {...person} status={status} />;
      })}
    </div>
  );
}
