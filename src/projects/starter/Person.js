import React from "react";
import "../../css/common.css";
export default function Person({
  name,
  age,
  company,
  address: { street, house },
  status,
}) {
  const clickHandeler = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <h4>{name}</h4>
      <div>{age}</div>
      <div>{company}</div>
      <div>{street}</div>
      <div>{house}</div>
      <p>{status}</p>

      <button type="button" onClick={(e) => clickHandeler(e)}>
        Click to check
      </button>
      <p>__________________</p>
    </>
  );
}
// const Person = ({ name, age, company, address: { street, house } }) => {
//     const clickHandeler = (e) => {
//         console.log(e.target);
//     };

//     return (
//         <>
//             <h4>{name}</h4>
//             <div>{age}</div>
//             <div>{company}</div>
//             <div>{street}</div>
//             <div>{house}</div>
//             <button type="button" onClick={(e) => clickHandeler(e)}>
//                 Click to check
//       </button>
//             <p>__________________</p>
//         </>
//     );
// };
