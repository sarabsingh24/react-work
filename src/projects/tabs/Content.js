import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import ImageIcon from '@material-ui/icons/Image';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Content({ data, loading }) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  if (loading) {
    return <h6>loading.......6</h6>;
  }
  const { company, dates, title, order, id, duties } = data;
  return (
    <div>
      <h4>{title}</h4>
     
      <h6>{dates}</h6>
      
      <List className={classes.root}>
      
        {duties.map((list, index) => {
          return <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar><ListItemText
            primary={list}
            secondary={secondary ? 'Secondary text' : null}
          />
          </ListItem>
        })}
        
      </List>
    </div>
  );
}
