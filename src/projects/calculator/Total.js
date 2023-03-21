import React from 'react'

function Total({ num, val, setVal, totalHandeler }) {

  return (
    <button className="btn-style" onClick={totalHandeler}>
      {num}
    </button>
  );
}

export default Total