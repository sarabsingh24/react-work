import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import data from './Data';
import './style.css'

const useStyles = makeStyles({
    root: {
       maxWidth: 600,
      margin:'0 auto',
      
    },
 leftAlign:{
     textAlign:'left'
 }
});


export default function ParaGenerator() {
    const classes = useStyles();
    const [count,setCount] = React.useState(1);
    const [para, setPara] = React.useState([]);

    const generatePara = () => {
        let num = parseInt(count);
        

        if (count <= 0){
            num = 0
        } else if (count > 10){
            num = 10
        }
        setPara(data.slice(0,num))
    }
   React.useEffect(()=>{
       generatePara();
   },[])
    return (
        <div className="container-box">
            <Typography variant="h6" gutterBottom>
             Peragraph Generator
      </Typography>
           
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Paragraph 
                        <input type="number" className="input-class" value={count} onChange={(e) => setCount(e.target.value)} />
                        
                        <Button size="small" variant="contained" color="primary" onClick={generatePara}>Generate</Button>
                    </Typography>
                 
                    
                    <Typography variant="body2" component="p" className={classes.leftAlign}>
                        {
                            para.map(items => {
                                return (
                                    <p>{items}</p>
                                )
                            })
                        }
                    </Typography>
                </CardContent>
           
            </Card>
               
              
         
         
        </div>
    )
}
