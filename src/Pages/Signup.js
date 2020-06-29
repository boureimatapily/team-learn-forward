import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker
//   } from "@material-ui/pickers";
  // MUI Stuff
//   import withStyles from "@material-ui/core/styles/withStyles";
//   import Grid from "@material-ui/core/Grid";
 
  import LinkMUI from "@material-ui/core/Link";
  
//   import Hidden from "@material-ui/core/Hidden";
  import Radio from "@material-ui/core/Radio";
  import RadioGroup from "@material-ui/core/RadioGroup";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import FormControl from "@material-ui/core/FormControl";
  import FormLabel from "@material-ui/core/FormLabel";


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
    height: 700,
    paddingLeft: 50,
    marginTop: 20,
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
            //   helperText={errors.email}
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
                //   helperText={errors.confirmPassword}
                //   error={errors.confirmPassword ? true : false}
                //   value={values.confirmPassword}
                //   onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.TwoColumns}>
              <div className={classes.Column}>
                <TextField
                  id="firstname"
                  label="Firstname"
                  placeholder="Firstname"
                  fullWidth
                  name="firstname"
                  type="text"
                //   helperText={errors.firstname}
                //   error={errors.firstname ? true : false}
                //   value={values.firstname}
                //   onChange={handleChange}
                />
              </div>
              <div className={classes.Column}>
                <TextField
                  id="lastname"
                  label="Lastname"
                  placeholder="Lastname"
                  fullWidth
                  name="lastname"
                  type="text"
                //   helperText={errors.lastname}
                //   error={errors.lastname ? true : false}
                //   value={values.lastname}
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
                //   helperText={errors.handle}
                //   error={errors.handle ? true : false}
                //   value={values.handle}
                //   onChange={handleChange}
                />
              </div>
              {/* <div className={classes.Column}>
                <MuiPickersUtilsProvider >
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      fullWidth
                      required
                    //   helperText={errors.dateValue}
                    //   error={errors.dateValue ? true : false}
                      margin="normal"
                      id="date-picker-dialog"
                      label="Birthday"
                      format="MM/dd/yyyy"
                    //   value={values.dateValue}
                    //   onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div> */}
            </div>
            <div className="validator">
              <FormControl
                component="fieldset"
                className={classes.textField}
                fullWidth
              >
                <FormLabel
                  component="legend"
                  className={classes.textLeft}
                  e
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                //   value={values.gender}
                //   onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
          
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
  );
}
