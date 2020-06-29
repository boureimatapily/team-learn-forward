import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import mimi from "../../../Images/mimi.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 400,
    width: 400,
  },
}));

export default function MainCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={mimi} />
        </CardActionArea>
      </Card>
    </div>
  );
}
