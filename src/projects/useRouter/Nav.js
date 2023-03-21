import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
    return (
      <div style={{ border: "1px solid red" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </div>
    );
}
