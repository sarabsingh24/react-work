import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Review from "./Review";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  margin: {
    padding: theme.spacing(1),
  },
}));

export default function List({ data }) {
  const classes = useStyles();
  const [counter, setCounter] = React.useState(0);
  console.log(counter);
  const prevClickHandeler = () => {
    setCounter(counter - 1);
    if (counter < 1) {
      setCounter(data.length - 1);
    }
  };

  const nextClickHandeler = () => {
    setCounter(counter + 1);

    if (counter >= data.length - 1) {
      setCounter(0);
    }
  };
  const rendamNumberHandeler = () => {
    let newNumber = Math.floor(Math.random() * data.length);
    if (newNumber == counter) {
      newNumber++;
    }
    setCounter(newNumber);
  };

  return (
    <div>
      <Box m={3} height="300px">
        <Review {...data[counter]} />
      </Box>
      <IconButton
        aria-label="delete"
        onClick={prevClickHandeler}
        className={classes.margin}
        size="small"
      >
        <ArrowBackIosIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={nextClickHandeler}
        className={classes.margin}
        size="small"
      >
        <ArrowForwardIosIcon fontSize="inherit" />
      </IconButton>

      <Box m={1}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={rendamNumberHandeler}
        >
          Random
        </Button>
      </Box>
    </div>
  );
}
