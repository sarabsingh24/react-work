import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: 'center',
        padding: '40px 0'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: '#1976d2'
    },
    pos: {
        marginBottom: 12,
        color:' rgba(0, 0, 0, 0.54)'
    },
    media: {
        width: '80px',
        height: '80px',
        margin: '0 auto',
        borderRadius: '50%'
    }
});

export default function CardHolder({person}) {
    const classes = useStyles();
    let { image, name, quote, title } = person;

    return (
        <>
            <Card className={classes.root} >

                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {name}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {quote}
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}
