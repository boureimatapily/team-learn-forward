import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Section1Card from "./Section1Card";
// import images

import cardimg from "../../../Images/cardimg.png";
import learn from "../../../Images/learn.png";
import money from "../../../Images/money.png";



const useStyles = makeStyles((theme) => ({
 
  section1: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    marginTop: 20,
    justifyContent:"space-around"
  },
   PapperSection1: {
    width: 250,
    height: 200,
  
  },
  
}));

export default function MainCard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section1}>
      <Paper className={classes.PapperSection1}>
              <Section1Card
                image={learn}
                infos=" Enroll Now"
                link="/courses"
                infoText="Interactive Courses"
                infoTextContent=" acquire new knowledge, skills, work on real project"
              />
            </Paper>
           
            <Paper className={classes.PapperSection1}>
              <Section1Card
                image={cardimg}
                infos=" Enroll Now"
                link="/courses"
                infoText="Mentorship"
                infoTextContent="Become a mentors, support our Student and Teachers"
                
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section1Card
                image={money}
                infos="Donate"
                link="/donation"
                infoText="Make a Donation"
                infoTextContent="Help us, all the fund goes for Education purpose, "
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section1Card
                image={money}
                infos="Invest"
                link="/investment"
                infoText="Investment Opportunities"
                infoTextContent="Invest in Education, get realtime update and report"
              />
            </Paper>
      </div>
    </div>
  );
}
