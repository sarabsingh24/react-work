import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Data } from "./Data";
import List from "./List";
import ButtonComp from "./Button";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "360px",
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BirthdayAlarm() {
  const classes = useStyles();
  const [person, setPerson] = React.useState(Data);
  const [reset, setReset] = React.useState(false);

  const clearListHandler = () => {
    setPerson([]);
  };
  const deleteSelected = (id) => {
    let newPerson = [...person];
    let removePerson = newPerson.filter((item) => item.id != id);
    setPerson(removePerson);
  };
  const resetListHandler = () => {
    setPerson(Data);
    setReset(false);
  };

  React.useEffect(() => {
    if (person.length < 1) {
      setReset(true);
    }
  }, [person]);
  return (
    <div>
      <Paper className={classes.root}>
        <Box p={2} display="flex" justifyContent="center">
          <h2 className="heading">({person.length}) Birthday Today</h2>
        </Box>
        <List person={person} clearFun={deleteSelected} />;
        <Box p={1} display="flex" justifyContent="center">
          {reset ? (
            <ButtonComp btnName="Reset" btnFun={resetListHandler} />
          ) : (
            <ButtonComp
              btnName="Clear Birthday List"
              btnFun={clearListHandler}
            />
          )}
        </Box>
      </Paper>
    </div>
  );
}
