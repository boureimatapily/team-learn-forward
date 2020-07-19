import React, { Component } from "react";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Investment from "./Pages/Investment";
import Donation from "./Pages/Donation";
import { connect } from "react-redux";
import Courses from "./Pages/Courses";

// import AppRoute from "./util/AppRoute";

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
            isAuthenticated={this.props.isAuthenticated}
            isVerifying={this.props.isVerifying}
          />
         
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/donation" component={Donation} />
          <Route exact path="/investment" component={Investment} />
          <Route exact path="/courses" component={Courses} />

        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserData: () => dispatch(getUserData()),
//     signout: () => dispatch(signout())
//   };
// };

export default connect(mapStateToProps)(App);
