import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import mimi from "../../../Images/mimi.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 10,
    flexGrow: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  rootPapper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(2),
      height: theme.spacing(2),
    },

    // backgroundColor:"#3a3346",
  },
  media: {
    height: 400,
    width: 400,
    marginTop:50,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 150,
  },
  Papper1: {
    width: 300,
    height: 300,
    paddingLeft:20,
    marginRight:10
  },
}));

export default function Welcome() {
  const classes = useStyles();
  // const [spacing, setSpacing] = React.useState(0);
  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs md lg></Grid>
      <Grid item xs={12} md={5} lg={5} className={classes.rootPapper}>
        <Paper className={classes.Papper1}>
          <h2>Discover new things to enrich your skill anytime anywhere.</h2>
          <h4>
            {" "}
            Gather Knowledge Without Leaving Home. Learn, Validate, Collaborate.
          </h4>
          <Link to="/login">
            {" "}
            <Button
              variant="contained"
              color="primary"
              className={classes.navButton}
            >
              Enroll Now
            </Button>{" "}
          </Link>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        <img src={mimi} className={classes.media} alt="mimi "/>
      </Grid>
      <Grid item xs md lg></Grid>
    </Grid>
  );
}
