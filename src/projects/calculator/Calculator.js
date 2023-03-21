import React, { useState, useEffect, useCallback } from "react";
import Numbers from "./Numbers";
import Signs from "./Signs";
import "./style.css";

function Calculator() {
  const [val, setVal] = useState("0");
  const [first, setFirst] = useState(0);
  const [isSign, setIsSign] = useState(false);

  const numHandeler = useCallback(
    (num) => {
      console.log(val);
      if (val === "0") {
        setVal(num);
      } else {
        setVal(val + num);
      }
      setIsSign(true);
    },
    [val]
  );

  const signHandeler = useCallback(
    (sign) => {
      if (sign !== val.slice(-1)) {
        let changeSign = val.slice(val.length - 1);
        changeSign = val.replace(changeSign, sign);

        setVal(changeSign);
        setIsSign(false);
      }
    },
    [val]
  );

  const totalHandeler = () => {
    console.log("total");
  };

  const defaultHandeler = () => {
    setVal("0");
  };

  return (
    <div className="calculator">
      total: {first}
      <input type="text" value={val} onChange={() => {}} />
      <div className="num-operator">
        <Numbers
          val={val}
          functionHandeler={numHandeler}
          totalHandeler={totalHandeler}
          defaultHandeler={defaultHandeler}
        />
        <Signs val={val} functionHandeler={signHandeler} />
      </div>
    </div>
  );
}

export default Calculator;
