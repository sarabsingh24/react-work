import React from "react";

function Count({ type, count }) {
  console.log(type);
  return (
    <div>
      {type}:{count}
    </div>
  );
}
export default React.memo(Count);
