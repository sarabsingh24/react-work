import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UsersList from "./UsersList";
import "./style.css";
import ShowError from "./ShowError";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

let personal = {
  firstName: "",
  email: "",
  age: "",
};

export default function FormSubmit() {
  const classes = useStyles();
  const [person, setPerson] = React.useState(personal);
  const [people, setPeople] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [editId, setEditId] = React.useState();

  // console.log(editList);
  const changeHandel = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const id = new Date().getTime().toString();
      const user = { ...person, id };
      setError(false);

      setPeople([...people, user]);
      setPerson({
        firstName: "",
        email: "",
        age: "",
      });
    } else {
      setError(true);
      setTimeout(()=>{
        setError(false);
      },2000)
      
    }
  };

  const editHandeler = (id) => {
    const newList = people.find((item) => item.id == id);
    setPerson({
      firstName: newList.firstName,
      email: newList.email,
      age: newList.age,
    });
    // setPeople([...people, user]);
    setEdit(true);
    setEditId(id);
  };

  const editSaveDataHandeler = (e) => {
    e.preventDefault();

    let filterList = people.map((item) => {
      if (item.id == editId) {
        return {
          ...item,
          firstName: person.firstName,
          email: person.email,
          age: person.age,
        };
      }

      return item;
    });

    setPerson({
      firstName: "",
      email: "",
      age: "",
    });
    setPeople(filterList);
    setEdit(false);
  };

  const deleteHandeler = (id) => {
    const newList = people.filter((item) => item.id !== id);
    setPeople(newList);
  };

  return (
    <>
      <article className="formContainer">
        <h4>Create your own List</h4>
        <div style={{height:"20px"}}>    {error && <ShowError text="Please fill valid value" color="red" />}</div>
    
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={changeHandel}
              autoComplete="firstName"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={changeHandel}
              autoComplete="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={changeHandel}
              autoComplete="age"
            />
          </div>
        

          {edit ? (
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
              onClick={editSaveDataHandeler}
            >
              Edit
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
              onClick={submitHandeler}
            >
              submit
            </Button>
          )}
        </form>
      
      </article>

      <ul className="list-container">
        <li className="list list-header">
          <div className="txt-cont">Name</div>
          <div className="txt-cont">Age</div>
          <div className="txt-cont">Email</div>
          <div>Change Status</div>
        </li>
        {people.length > 0 ? (
          <UsersList
            people={people}
            deleteHandeler={deleteHandeler}
            editHandeler={editHandeler}
          />
        ) : (
          "no data found"
        )}
      </ul>
    </>
  );
}
