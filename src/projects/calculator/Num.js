import React from "react";

function Num({ num, functionHandeler }) {
  return (
    <button className="btn-style" onClick={()=>functionHandeler(num)}>
      {num}
    </button>
  );
}

export default Num;
