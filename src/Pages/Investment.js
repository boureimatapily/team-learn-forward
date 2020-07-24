import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Paper, Button } from "@material-ui/core";
import InvestCard from "../Components/Home/MainContent/InvestCard";
import money from "../Images/money.png";
import chart from "../Images/chart.png";
import education from "../Images/education.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  PapperSection1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  cardButton:{
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,

  }
}));

export default function Investment() {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.PapperSection1} elevation={0}>
            <InvestCard
              image={money}
              infos="Investment Opportunities"
              link="/investment"
            />
            <InvestCard
              image={education}
              infos="Education Sector"
              link="/investment"
            />
            <InvestCard
              image={chart}
              infos="Statistics Charts"
              link="/investment"
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardButton}>
          <Button
          variant="contained"
          color="primary"
          style={{backgroundColor:"red", borderRadius:30, width:400, height:80, fontWeight:"bolser" }}
          >
            <h3> BECOME AN INVESTOR </h3>
          </Button>
          <h3>already have an account <NavLink to="/investment">Log in</NavLink></h3> 
        </Grid>
      </Grid>
    </Container>
  );
}
