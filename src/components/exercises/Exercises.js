import React, {Fragment} from 'react'
import { Grid, Paper, Typography } from './ExeCommon'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const style = {
    Papper: {
        padding:20,
        marginTop: 10,
        marginBottom: 10
    }
}


export default function Exercises({exercises}) {

    return (
        
        <Grid container >
            <Grid item xs>
           
                <Paper style={style.Papper}>
                    {exercises.map( ([group,exercises]) => 
                     <Fragment>
                        <Typography 
                        variant="h4" 
                        color="inherit"
                        style={{textTransform: "capitalize"}}>
                       {group}
                      </Typography>
                     
                      <List component="nav" aria-label="secondary mailbox folders">
                      
                      {exercises.map(({title}) =>
                      <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                      )

                      }
                      
                
                        
                 
                    </List>
                    </Fragment>
                        
                    )}
                </Paper>


            </Grid>
           
            <Grid item xs>
                  <Paper style={style.Papper}>
                    Welcome to the discription page.
                </Paper>

            </Grid>
        </Grid>
       
    )
}
