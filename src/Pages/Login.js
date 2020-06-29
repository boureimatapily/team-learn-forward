import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  loginSection: {
    width: 400,
    height: 450,
    paddingLeft: 50,
    marginTop: 50,
  },
  formSection: {
    width: 350,
  },
  otheraccounts:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      
  },
  btnotheraccounts:{
      fontWeight:"bold",
      marginRight:10
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.loginSection}>
        <h1>Log In to Learn forward</h1>
        <form autoComplete={"false"} className={classes.formSection}>
          <TextField
            id="standard-basic"
            label="Email Address"
            placeholder="Email address "
            fullWidth
            /* variant="outlined" */
            required
            name="email"
            autoFocus
            // value={this.state.email}
            // onChange={this.handleChange}
          />
          <div className="validator">
            <TextField
              /* variant="outlined" */
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              //   value={this.state.password}
              //   onChange={this.handleChange}
            />
          </div>
          <Typography
            variant="body1"
            style={{ marginTop: 20, marginBottom: 10 }}
          >
             <Link to="/"> I forgot my password</Link>
          </Typography>
          <p style={{ marginTop:20 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.Btn}
              //   disabled={loginRequest}
            >
              Login
            </Button>
          </p>
        
          <Typography
            variant="body1"
            style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}
          >
            Don't have an account? <Link to="/signup">Sing up</Link>
          </Typography>
        </form>
        <h3>Log In with Another Account</h3>
        <div className={classes.otheraccounts}>
        <Button
            variant="contained"
            color="primary"
            className={classes.btnotheraccounts}
          >
            Google
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnotheraccounts}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            // color="primary"
            className={classes.btnotheraccounts}
          >
            Twitter
          </Button>
        </div>
      </Paper>
    </div>
  );
}
