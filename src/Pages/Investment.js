import React  from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function Investment() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
            <h1>Investment</h1>
    </div>
  );
}
