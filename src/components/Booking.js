import React,{Component,Fragment} from "react"
import Stepper from "./stepper"
import Grid from "@material-ui/core/Grid"
import Fire from "./fire"
import firebase from "firebase"
import Loader from "react-loader-spinner"
import google from "./common/google.png"
import Button from "@material-ui/core/Button"
import Nav from "./common/navbar"
import Paper from '@material-ui/core/Paper';


var provider = new firebase.auth.GoogleAuthProvider();
class bookingComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      booking:{},
      auth:false
    }
  }
  componentDidMount(){
    Fire.database().ref('movie/').set({
      movie:this.props.match.params.name
       });

      firebase.auth().onAuthStateChanged((user)=> {
        if(user){
          this.setState({auth:true})
        }
        else
        this.setState({auth:false})
    });
    // console.log(this.props.match)
  }
  handleClick=()=>{
   
    
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  render(){
    if(this.state.auth)
    return(
      <Fragment>
        
      <Paper elevation={10} style={{margin:"1%", padding:"2%"}}>
      <Grid container justify="center" alignItems="center">
      <h1>{this.props.match.params.name}</h1>
      </Grid>
      <Grid container justify="center" alignItems="center">
       <Stepper />
      
      </Grid>
      </Paper>
      </Fragment>
      
    )
    else
    return(
    <Fragment>
      <h1>Whoops!</h1>
      <h1>You need to be logged in to continue</h1>
      <h1>Don't worry, it's simple. Just click the button below!</h1>
      <Grid container justify="center" alignItems="center">
      <Button variant="contained" style={{textTransform:"none"}} onClick={this.handleClick}><img src={google} 
    width="20px" height="20px" style={{marginRight:"10px"}}  />Sign in with Google</Button>
    </Grid>
    </Fragment>
    )
  }
}

export default bookingComponent