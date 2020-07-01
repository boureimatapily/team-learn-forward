import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainCard from "./MainContent/MainCard";
import MainCard2 from "./MainContent/MainCard2";
//import { Link } from '@material-ui/core';

import Welcome from "./MainContent/Welcome";

import { Grid, Container } from "@material-ui/core";
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root:{
    dislpay:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  imgCover: {
    height: 400,
    marginLeft: "20%",
  },
  
  learnTitle: {
   marginBottom:2,
   marginLeft:15,
   fontSize:20
  },
  Section2:{
    marginTop:100
  }
 
}));

export default function MainContent() {
  const classes = useStyles();
  // const [spacing, setSpacing] = React.useState(2);
  return (
    <Container fixed>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <div className={classes.rootPapper}>
            <Welcome />

          </div>
        </Grid>
       
        <Grid container>
          <Grid item xs md lg></Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div>
              <p>
                <h4 className={classes.learnTitle}>Start Learning by Choosing your option </h4>
    
             <span>Learning is the procces of  acquiring new or modifying existing 
              knowledge behavios skills, values or preferences </span>
              </p>
            
            </div>
          </Grid>
          <Grid item xs md lg></Grid>
        </Grid>
        
        <Grid item xs={12} md={12} lg={12}>
          <div className={classes.Section1}>
            <MainCard />
          </div >
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <div className={classes.Section2}>
          <MainCard2 />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
