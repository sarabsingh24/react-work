import React, { useContext } from "react";
import { useGlobalContext } from "./context";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Listitem({
  id,
  title,
  img: picture,
  amount,
  price,
  
 
}) {

    const { increment, decerease } = useGlobalContext();

  return (
    <>
      <div style={{ maxWidth: 80 }}>
        <img src={picture} alt={title} />
      </div>
      <div style={{ textAlign: "left" }}>
        <h4 className="title">{title}</h4>
        <div>{price}</div>
        <div>Remove</div>
      </div>
      <div>
        <IoIosArrowUp onClick={() => increment(id)} />
        <div>{amount}</div>
        <IoIosArrowDown onClick={() => decerease(id)} />
      </div>
    </>
  );
}
