import React from "react";

function Sign({ sign, functionHandeler }) {
  return (
    <button className="btn-style" onClick={()=>functionHandeler(sign)}>
      {sign}
    </button>
  );
}

export default Sign;
