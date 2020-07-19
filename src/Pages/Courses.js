import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        flexGrow: 1,
      },
      
}

class Courses extends React.Component{
 
  render(){
     const { classes } = this.props;
    return(
        <div style={classes.root}>
            <h1>ALL courses</h1>
        </div>
    )
  }
}
export default  withStyles(styles)(Courses)