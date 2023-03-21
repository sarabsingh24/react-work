import React from "react";

import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
