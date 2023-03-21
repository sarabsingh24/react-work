import React from "react";
import Num from "./Num";
import Total from "./Total";
import Nutral from "./Nutral";
function Numbers({ val, functionHandeler, totalHandeler, defaultHandeler }) {
  console.log("render");
  return (
    <div className="num-btn">
      <Nutral num="C" val={val} defaultHandeler={defaultHandeler} />
      <Num num="1" val={val} functionHandeler={functionHandeler} />
      <Num num="2" val={val} functionHandeler={functionHandeler} />
      <Num num="3" val={val} functionHandeler={functionHandeler} />
      <Num num="4" val={val} functionHandeler={functionHandeler} />
      <Num num="5" val={val} functionHandeler={functionHandeler} />
      <Num num="6" val={val} functionHandeler={functionHandeler} />
      <Num num="7" val={val} functionHandeler={functionHandeler} />
      <Num num="8" val={val} functionHandeler={functionHandeler} />
      <Num num="9" val={val} functionHandeler={functionHandeler} />
      <Num num="0" val={val} functionHandeler={functionHandeler} />
      <Total num="=" val={val} totalHandeler={totalHandeler} />
    </div>
  );
}

export default React.memo(Numbers);
