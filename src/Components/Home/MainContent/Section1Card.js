import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        maxHeight:250,
      },
      media: {
        height: 100,
        width: 200,
      },
      cardButton:{
          
          marginTop:10,
          height:60,
      }
  
}));

export default function Section1Card({image, infos, link}) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
         <Link to={link}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent className={classes.cardinfos}>
         
          
         
            {" "}
            <Button variant="contained" color="primary" className={classes.cardButton}>
                    <h3>{infos}</h3>
          </Button>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
  );
}
