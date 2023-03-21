import React from 'react'
import {
    makeStyles, AppBar, Toolbar, Typography
} from './Common';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="headline" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}
