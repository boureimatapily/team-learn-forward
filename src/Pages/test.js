import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
//import { Link } from '@material-ui/core';
import { Link } from "react-router-dom";
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButton:{
        marginLeft:10,
  },
  imgLogo:{
      width:80,
      height:50
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {/* <img src={logo} className={classes.imgLogo} /> */}
            Learn Forward
          </Typography>
          <Link to="/">
            {" "}
            <Button variant="contained" color="primary" className={classes.navButton}>Home</Button>{" "}
          </Link>
          <Link to="/courses">
            {" "}
            <Button variant="contained" color="primary" className={classes.navButton}>Browse Courses</Button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <Button variant="contained" color="primary" className={classes.navButton}>Login</Button>{" "}
          </Link>
          <Link to="/signup">
            {" "}
            <Button variant="contained" color="primary" className={classes.navButton}>Sign up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
