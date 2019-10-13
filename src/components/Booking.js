import React,{Component,Fragment} from "react"
import Stepper from "./stepper"
import Grid from "@material-ui/core/Grid"
import Fire from "./fire"
import firebase from "firebase"
import Loader from "react-loader-spinner"



var provider = new firebase.auth.GoogleAuthProvider();
class bookingComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      booking:{}
    }
  }
  componentDidMount(){
    Fire.database().ref('movie/').set({
      movie:this.props.match.params.name
       });

      firebase.auth().onAuthStateChanged((user)=> {
        if(!user){
          alert("Please login to continue")
          this.props.history.push(`/description/${this.props.match.params.cid}`)
        }
    });
    console.log(this.props.match)
  }
  render(){
    
    return(
      <Fragment>

      
      <Grid container justify="center" alignItems="center">
      <h1>{this.props.match.params.name}</h1>
      </Grid>
      <Grid container justify="center" alignItems="center">
       <Stepper />
      </Grid>
      </Fragment>
    )
  }
}

export default bookingComponent