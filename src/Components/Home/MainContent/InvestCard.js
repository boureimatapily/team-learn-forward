import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 250,
    backgroundColor:"#d7d5e3",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
   
  },
  media: {
    height: 120,
    width: 120,
    marginLeft: "22%",
    marginRight: "10%",
    marginTop:20,
    borderRadius:30,
    
  },
  cardButton: {
    height: 60,
    width: 160,
    backgroundColor:"#363445",
    fontWeight:"bold",
    borderRadius:20
    
  },
  cardinfos:{
    marginLeft:"10%",
    color:"#0a0a0a",
    fontWeight:"bold"
    
  },
}));

export default function InvestCard({
  image,
  infos,
  link,
  infoText,
  infoTextContent,
}) {
  const classes = useStyles();

  return (
    <div>
      <Link to={link}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} />
            <CardContent className={classes.cardinfos}>
              {" "}
              <h3> {infoText} </h3>
              <h4> {infoTextContent} </h4>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardButton}
              >
                <h3>{infos}</h3>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
