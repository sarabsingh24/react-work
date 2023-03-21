import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";

import './userStyle.css';
export default function Users({ list }) {

    const [type,setType] = React.useState('');
    const [value, setValue] = React.useState("");

const {name: {first}, email, picture:{medium},cell,location:{country}} = list;

const person ={
  name: first,
  email,
  medium,
  phone:cell,
  country

}

const changeTextHandeler = (e) => {

  if (e.target.classList.contains("data_box")){
    let type = e.target.dataset.lable;
   
    setType(type);
    setValue(person[type]);
  }
 
    
}


    return (
      <section className="card">
        <img src={medium} alt="my image" />
        <p className="para">My {type} is</p>
        <h4> {value}</h4>
        <article className="card_data">
          <div
            className="data_box"
            data-lable="name"
            onMouseOver={changeTextHandeler}
          >
            <FaUserAlt />
            <div className="text"> {first}</div>
          </div>
          <div
            className="data_box"
            data-lable="email"
            onMouseOver={changeTextHandeler}
          >
            <MdEmail />
            <div className="text"> {email}</div>
          </div>
          <div
            className="data_box"
            data-lable="phone"
            onMouseOver={changeTextHandeler}
          >
            <ImHeadphones />
            <div className="text"> {cell}</div>
          </div>
          <div
            className="data_box"
            data-lable="country"
            onMouseOver={changeTextHandeler}
          >
            <MdLocationOn />
            <div className="text"> {country}</div>
          </div>
        </article>
      </section>
    );
}
