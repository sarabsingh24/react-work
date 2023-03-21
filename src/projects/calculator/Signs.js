import React from "react";
import Sign from "./Sign";

function Signs({ val, functionHandeler }) {
  return (
    <div className="sign-btn">
      <Sign sign="-" val={val} functionHandeler={functionHandeler} />
      <Sign sign="+" val={val} functionHandeler={functionHandeler} />
      <Sign sign="*" val={val} functionHandeler={functionHandeler} />
      <Sign sign="/" val={val} functionHandeler={functionHandeler} />
    </div>
  );
}

export default React.memo(Signs);
