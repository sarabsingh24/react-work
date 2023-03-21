import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Home({ clickFunction }) {
  return (
    <div className="menu">
      <GiHamburgerMenu onClick={clickFunction} />
    </div>
  );
}
