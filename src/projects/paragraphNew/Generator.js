import React from "react";
import data from "./Data";
import Header from './Header'
import "./style.css";

export default function Generator() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState([]);

  const clickHandeler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    let length = data.length - 1;
    console.log(length);

    if (amount <= 0) {
      amount = 1;
    } else if (amount > length) {
      amount = length;
    }

    setText(data.slice(0, amount));
  };

React.useEffect(()=>{
setText(data.slice(0, 1));
},[])

  return (
    <div className="form-container">
      <Header clickHandeler={clickHandeler} count={count} setCount={setCount} />

      {text.map((para, paraIndex) => {
        return (
          <div key={paraIndex} className="para-text">
            <strong>{paraIndex + 1}.</strong>
            <p className="tex">{para}</p>
          </div>
        );
      })}
    </div>
  );
}
