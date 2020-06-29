import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
// import images

import cardimg from "../../Images/cardimg.png";
import learn from "../../Images/learn.png";
import money from "../../Images/money.png";

import MainCard from "./MainContent/MainCard";
//import { Link } from '@material-ui/core';

import Welcome from "./MainContent/Welcome";
import Section1Card from "./MainContent/Section1Card";
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  rootPapper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    marginTop: 5,
    backgroundColor:"#3a3346;",
  },
  Papper1: {
    width: 300,
    height: 300,
    marginLeft: "20%",
  },
  Papper2: {
    width: 400,
    height: 400,
    marginRight: "5%",
  },
  imgCover: {
    height: 400,
    marginLeft: "20%",
  },
  section1: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(10),
      height: theme.spacing(16),
    },
     marginTop:20,
      marginLeft:"10%",
  },
  PapperSection1: {
      width:240,
      height:193,
     
  },
}));

export default function MainContent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rootPapper}>
        <Paper className={classes.Papper1}>
          <Welcome />
        </Paper>
        <Paper className={classes.Papper2}>
          <MainCard />
        </Paper>
      </div>
      <div className={classes.section1}>
        <Paper className={classes.PapperSection1}>
          <Section1Card image={learn} infos="Interactive Courses"  link="/courses" />
        </Paper>
        <Paper className={classes.PapperSection1}>
          <Section1Card image={cardimg} infos="S.T.E.M Courses" link="/courses" />
        </Paper>
        <Paper className={classes.PapperSection1}>
          <Section1Card image={money} infos="Make a Donation"  link="/donation" />
        </Paper>
        <Paper className={classes.PapperSection1}>
          <Section1Card image={money} infos="Investment Opportunities" link="/investment" />
        </Paper>
      </div>
    </div>
  );
}
