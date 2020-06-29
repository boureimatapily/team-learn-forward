import React  from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function Donation() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
            <h1>Donation</h1>
    </div>
  );
}
