import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function EX() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
     
    </div>
  );
}


///// class base component

import { withStyles } from "@material-ui/styles";

const styles = {}

class test extends React.Component{
 
  render(){
     const { classes } = this.props;
    return(
        <h1>hello</h1>
    )
  }
}
export default  withStyles(styles)(test)