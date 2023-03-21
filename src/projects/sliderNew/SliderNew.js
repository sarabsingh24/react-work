import React from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Paper from "@material-ui/core/Paper";
import "./style.css"
import Data from "./data"

export default function SliderNew() {
const [people, setPeople] = React.useState(Data);
const [value, setValue] = React.useState(0);

// React.useEffect(() => {
//   const slideLength = people.length - 1;

//   if (value < 0) {
//     setValue(slideLength);
//   }

//   if (value > slideLength) {
//     setValue(0);
//   }

  
// }, [value, people]);


React.useEffect(() => {
  let slider = setInterval(() => {
    setValue((oldValue) => {
      let value = oldValue + 1;
      if (value > people.length - 1) {
        value = 0;
      }
      return value;
    });
    
  }, 3000);

  return () => {
    clearInterval(slider);
  }
}, [value]);



    const userList = people.map((users, userIndex) => {
      
      const { title, image: pic, id, name, quote } = users;
      let position = "next-slide";
      
      if (value == userIndex) {
        position = "active-slide";
      }

      if (userIndex == value - 1 || (value == 0 && userIndex == people.length - 1)) {
        position = "prev-slide";
      }

      return (
        <article key={id} className={`article ${position}`}>
          <img src={pic} className="carrousal-img" />
          <header className="card-title">{title}</header>
          <h4>{name}</h4>
          <p className="carrousal-text">{quote}</p>
        </article>
      );
    });


    
const prevHandeler = () => {
  setValue((oldValue) => {
    let value = oldValue - 1;
    if (value < 0) {
      return setValue(people.length - 1);
    }
  });
  return setValue(value - 1);
};
const nextHandeler = () => {
  setValue((oldValue) => {
    let value = oldValue + 1;
    if (value > people.length -1){
      return setValue(0);
    }
  });
  return setValue(value + 1);
};




    return (
      <div className="carrousal">
        
          <ArrowBackIosIcon onClick={prevHandeler} className="btn-position" />
      
        <Paper className="carrousal-content">{userList}</Paper>

        <ArrowForwardIosIcon onClick={nextHandeler} className="btn-position" />
      </div>
    );
}
