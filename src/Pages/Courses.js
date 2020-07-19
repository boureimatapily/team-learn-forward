import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainCard2 from "../Components/Home/MainContent/MainCard2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:50,
  },
  
}));

export default function Courses() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <MainCard2 />
     
    </div>
  );
}