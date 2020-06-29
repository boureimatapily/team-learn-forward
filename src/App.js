import React, { Component } from 'react'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Courses from './Pages/Courses';
import { Switch, Route, } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Investment from './Pages/Investment';
import Donation from './Pages/Donation';



export default class App extends Component {
  render() {
    return (
     <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/donation" component={Donation} />
          <Route exact path="/investment" component={Investment} />
        </Switch>
     </React.Fragment>
        
    )
  }
}

