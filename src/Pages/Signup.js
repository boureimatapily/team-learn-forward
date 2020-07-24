import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, Typography, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import LinkMUI from "@material-ui/core/Link";
import mimi from '../Images/signup.png'

const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
  },
  loginSection: {
    paddingRight:20,
    paddingLeft: 20,
    marginTop: 20,
  },
 
  otheraccounts:{
    display:"flex",
    
},
btnotheraccounts:{
    fontWeight:"bold",
    marginRight:10,
    marginBottom:10
}
 
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container> 
      <Grid item xs={12} sm={12} md={6} lg={6} >
        <Paper elevation={0} style={{width:400, marginRight:0}} >
            <img src={mimi} alt="photo_logo" style={{width:500, height:400}} />
        </Paper>
       </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} > 
    <div>
      <Paper className={classes.loginSection} elevation={5}>
        <h1>Get Started for Free</h1>
        <form autoComplete={"false"} className={classes.formSection}>
            <TextField
              id="standard-basic"
              label="Email Address"
              placeholder="Email address for mail confirmation"
              fullWidth
              name="email"
              autoFocus
            //   value={values.email}
            //   onChange={handleChange}
            //   error={errors.email ? true : false}
            />
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  fullWidth
                  name="password"
                //   value={values.password}
                //   onChange={handleChange}
                //   helperText={errors.password}
                //   error={errors.password ? true : false}
                />
              </div>
              <div className={classes.Column}>
                <TextField
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  fullWidth
                  name="confirmPassword"
              
                //   value={values.confirmPassword}
                //   onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id=" fullname"
                  label="fullname"
                  placeholder="fullname"
                  fullWidth
                  name="name"
                  type="text"
              
                //   value={values.firstname}
                //   onChange={handleChange}
                />
              </div>
             
            </div>
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id="handle"
                  label="Username"
                  fullWidth
                  name="handle"
                  type="text"
            
                //   value={values.handle}
                //   onChange={handleChange}
                />
              </div>
           
            </div>
        

            <Typography
              variant="body2"
              style={{ marginTop: 20, marginBottom: 10, color: "#888" }}
            >
              By clicking Sign Up, you agree to our{" "}
              <LinkMUI href="#">
                Terms of Service
              </LinkMUI>{" "}
              and{" "}
              <LinkMUI href="#">
                Privacy Policy
              </LinkMUI>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.Btn}
            //   disabled={loginRequest}
            >
              Sign Up
             
            </Button>
            <Typography
              variant="body1"
              style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}
            >
              Already have an account? <Link to={"/login"}>Log in</Link>
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
    </Grid>
    
    </Grid>
    </Container>
  );
}
