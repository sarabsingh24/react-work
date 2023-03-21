import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/itemlist">
          <li>Item list</li>
        </Link>
      </ul>
    </div>
  );
}
