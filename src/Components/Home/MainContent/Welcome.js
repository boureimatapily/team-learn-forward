import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft:10,
  },
  
}));

export default function Welcome() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1> Learn,</h1>
            <h1>Validate,</h1>
            <h1>Collaborate.</h1>
            <h3>Join over 1000 students</h3>
        </div>
    )
}
