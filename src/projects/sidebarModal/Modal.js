import React,{useContext} from 'react';
import { FirstContext, useGlobalContext } from "./context";
import './style.css';

export default function Modal() {
    const data = useGlobalContext();
    console.log(data)
    return (
      <div className="">
        <button className="btn">Click to view modal</button>
      </div>
    );
}
