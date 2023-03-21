import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));
export default function ListAll({ person, clearFun }) {
  const classes = useStyles();
  return (
    <>
      {person.map((item) => {
        let { id, name, age, image, info } = item;
        return (
          <List key={id}>
            <ListItem alignItems="flex-start">
              <HighlightOffIcon
                className="closeIcon"
                onClick={() => clearFun(id)}
              ></HighlightOffIcon>
              <ListItemAvatar>
                <Avatar alt={name} src={image} />
              </ListItemAvatar>
              <ListItemText
                primary={`${name} (${age}) `}
                className="name"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    ></Typography>
                    {info}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="div" />
          </List>
        );
      })}
    </>
  );
}
