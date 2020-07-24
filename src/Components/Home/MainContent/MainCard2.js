import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Section2Card from "./Section2Card";
// import images

import cardimg from "../../../Images/cardimg.png";
import learn from "../../../Images/learn.png";
import money from "../../../Images/money.png";
import { Grid, Container } from "@material-ui/core";


import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




const useStyles = makeStyles((theme) => ({
 root:{
   display:"flex",
 },
  section1: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    height:700,
    justifyContent:"space-around"
  },
   PapperSection1: {
    width: 250,
  },
  ListRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  
}));

export default function MainCard2() {
  const classes = useStyles();

  return (
      <Container fixed>
      <Grid conatiner className={classes.root}>
        <Grid item xs={12} md={3} lg={3}>

        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Our Categories
        </ListSubheader>
      }
      className={classes.ListRoot}
    >
      <ListItem button>
        {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
        <ListItemText primary="IT" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
        <ListItemText primary="Bussiness" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
        <ListItemText primary="Maths" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
        <ListItemText primary="Grammar" />
      </ListItem>
      <ListItem button>
        {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
        <ListItemText primary="Sciences" />
      </ListItem>

    </List>

        </Grid>
        <Grid item xs={12} md={9} lg={9}>
        <div className={classes.section1}>
      <Paper className={classes.PapperSection1}>
              <Section2Card
                image={learn}
                infos=" Enroll Now"
                link="/login"
                infoText="HR"
                infoTextContent="Enroll this couse to know everything about HR"
              />
            </Paper>
           
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={cardimg}
                infos=" Enroll Now"
                link="/login"
                infoText="Bussiness"
                infoTextContent="Manage your own Bussinnes, Enroll and Lern everything"
                
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={money}
                infos="Enroll Now"
                link="/login"
                infoText="Basic Maths"
                infoTextContent="Help us, all the fund goes for Education purpose, "
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={money}
                infos="Enroll Now"
                link="/login"
                infoText="JavaScript"
                infoTextContent="Best Js course for beginner"
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={money}
                infos="Enroll Now"
                link="/login"
                infoText="Python"
                infoTextContent="Best Python course for beginner"
              />
            </Paper>
            <Paper className={classes.PapperSection1}>
              <Section2Card
                image={money}
                infos="Enroll Now"
                link="//login"
                infoText="Grammar"
                infoTextContent="Best Python course for beginner"
              />
            </Paper>
      </div>
    
        </Grid>
      </Grid>
      </Container>
  );
}
