import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: "100px;",
    height: "100px;",
    margin: "0 auto",
  },
}));
export default function Review({ id, img, text, name, job }) {
  const classes = useStyles();
  return (
    <div>
      <Avatar alt={name} src={img} className={classes.avatar} />

      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
        {job}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {text}
      </Typography>
    </div>
  );
}
