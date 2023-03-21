import React from "react";
import data from "./data";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import './style.css'

export default function BirthdayAlarm() {
  const [people, setPeople] = React.useState(data);

  const crearListHandler = () =>{
      setPeople([]);
  }

  const removeHandeler = (id) => {
const newList = people.filter(person => person.id !== id);
setPeople(newList);
  }

  const resetHandler = () => {
      setPeople(data);
  }

  return (
    <section className="alarm-container scroll-box">
      <div className="content-box">
        <h4>({people.length}) Birthday Today</h4>
        {people.map((person) => {
          const { id, name, age, image: profileImage, info } = person;
          return (
            <div key={id} className="content-row">
              <div className="close-icon">
                <IconButton onClick={() => removeHandeler(id)}>
                  <HighlightOffIcon />
                </IconButton>
              </div>
              <img src={profileImage} alt={name} className="thum-image" />
              <article>
                <header className="name">
                  {name} <span className="age">({age})</span>
                </header>
                <p className="info">{info}</p>
              </article>
            </div>
          );
        })}

        {people.length < 1 ? (
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={resetHandler}
          >
            Reset
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={crearListHandler}
          >
            Clear All
          </Button>
        )}
      </div>
    </section>
  );
}
