import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Section2Card from "./Section1Card";
// import images

import cardimg from "../../../Images/cardimg.png";
import learn from "../../../Images/learn.png";
import money from "../../../Images/money.png";
import { Grid, Container } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
 root:{
   display:"flex",
   flexGrow:1,
 },
  section1: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    marginTop: 20,
    marginLeft: "10%",
  },
   PapperSection1: {
    width: 200,
    height: 100,
  },
  
}));

export default function MainCard2() {
  const classes = useStyles();

  return (
    <Container fixed >
      <Grid conatiner className={classes.root}>
        <Grid item xs={12} md={4} lg={4}>
            <h1>hello</h1>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
        <div className={classes.section1}>
      <Paper className={classes.PapperSection1}>
              <Section2Card
                image={learn}
                infos=" Enroll Now"
                link="/courses"
                infoText="Interactive Courses"
                infoTextContent=" acquire new knowledge, skills, work on real project"
              />
            </Paper>
           
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={cardimg}
                infos=" Enroll Now"
                link="/courses"
                infoText="Mentorship"
                infoTextContent="Become a mentors, support our Student and Teachers"
                
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={money}
                infos="Donate"
                link="/donation"
                infoText="Make a Donation"
                infoTextContent="Help us, all the fund goes for Education purpose, "
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={money}
                infos="Invest"
                link="/investment"
                infoText="Investment Opportunities"
                infoTextContent="Invest in Education, get realtime update and report"
              />
            </Paper>
      </div>
    
        </Grid>

      </Grid>
      
    </Container>
  );
}
