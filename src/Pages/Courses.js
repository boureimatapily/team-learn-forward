import { withStyles } from "@material-ui/styles";

const styles = {}

class Courses extends React.Component{
 
  render(){
     const { classes } = this.props;
    return(
        <h1>ALL courses</h1>
    )
  }
}
export default  withStyles(styles)(Courses)