import React from "react"; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tabPosition: {
   
    marginRight:"10px"
  }
}));

export default function Tabs({ data, value, changeValue }) {
  const classes = useStyles();
  const allTabs = data.map((list) => {
    return list.company;
  });
  

  return (
    <div >
      {allTabs.map((tabs, index) => {
       
          return (
            <Button variant="contained" color={value == index ? "secondary" : ''} key={index} onClick={(e) => changeValue(e, index)} className={classes.tabPosition}>
              {tabs}
            </Button>
          )
        
    
  
      })}
    </div>
  );
}
