import React from 'react';
import Display from './Display';
import url from './data';

export default function FoodMenuNew() {

const [data,setData] = React.useState(url);
const [list, setList] = React.useState([]);

const menu = ["All", ...new Set( data.map((item) => item.category))];

const selectMenuHandeler = (name) => {

    if(name == "All"){
        setList(data);
        return;
    }
    const newList = data.filter((list) => list.category == name);
    setList(newList);
}

React.useEffect(()=> {
setList(data);
},[]);

return (
  <div>
      <h3>Food Menu</h3>
    {menu.map((name) => {
      return (
        <span key={name} onClick={() => selectMenuHandeler(name)} className="tab-name">
          {name}
        </span>
      );
    })}

    <Display list={list} />
  </div>
);
}
