import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function UsersList({ people, deleteHandeler, editHandeler }) {
  const classes = useStyles();
  return (
    <>
      {people.map((person) => {
        const { id, firstName: name, email, age } = person;
        return (
          <li key={id} className="list">
            <div className="txt-cont"><span className="show-in-m">Name: </span> {name}</div>
            <div className="txt-cont"><span className="show-in-m">Age: </span> {age}</div>
            <div className="txt-cont"><span className="show-in-m">Email: </span> {email}</div>
            <div>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={() => editHandeler(id)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<DeleteForeverIcon />}
                onClick={() => deleteHandeler(id)}
              >
                Delete
              </Button>
            </div>
          </li>
        );
      })}
    </>
  );
}
