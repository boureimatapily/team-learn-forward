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
    maxWidth: 200,
    maxHeight: 200,
    backgroundColor:"#a74fff",
    marginTop:100
    
   
  },
  media: {
    height: 80,
    width: 80,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop:20,
    borderRadius:30,
  },
  cardButton: {
    height: 60,
    width: 150,
    backgroundColor:"#810aff"
  },
  cardinfos:{
    paddingLeft:20,
    color:"#0a0a0a",
    fontWeight:"bold"
    
  },
}));

export default function Section2Card({
  image,
  infos,
  link,
  infoText,
  infoTextContent,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={link}>
        <Card>
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
