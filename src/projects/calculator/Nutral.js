import React from 'react'

function Nutral({ num, val, setVal, defaultHandeler }) {
 
  return (
    <button className="btn-style" onClick={defaultHandeler}>
      {num}
    </button>
  );
}

export default Nutral