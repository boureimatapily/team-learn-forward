import React from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, Typography, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import {loginUser} from "../redux/Actions/authActions"
import { connect } from "react-redux";

// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";

const styles = {
 
  loginSection: {
    paddingLeft: 20,
    paddingRight:20,
    marginTop: 50,
  },

  otheraccounts:{
      display:"flex",
      marginBottom:10
  },
  btnotheraccounts:{
      fontWeight:"bold",
      marginRight:10
  }
};


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:""
    };
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onLogin = ()=>{
    
  this.props.history.push('/');
}
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.loginUser(email, password,this.onLogin);
  };

    
  render() {
    const { classes } = this.props;
  return (
    <Container fixed >
      <Grid container> 
      <Grid item xs md lg > </Grid>
      <Grid item xs={12} md={6} lg={6} > 
    <div className={classes.root}>
      <Paper className={classes.loginSection}>
        <h1>Log In to Learn forward</h1>
        <form autoComplete={"false"} className={classes.formSection} onSubmit={this.handleSubmit} >
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
            onChange={this.handleChange}
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
                onChange={this.handleChange}
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
    </Grid>
    <Grid item xs md lg > </Grid>
    </Grid>
    </Container>
  );
}
}

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default  withStyles(styles)(connect(mapStateToProps,{loginUser})(Login))
