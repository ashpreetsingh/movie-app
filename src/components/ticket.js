import React,{Component,Fragment} from "react"
import Stepper from "./stepper"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import cinemaData from "../content/cinemadetail"
import Button from '@material-ui/core/Button';
import Fire from "./fire"
import firebase from "firebase"
import Loader from "react-loader-spinner"



var provider = new firebase.auth.GoogleAuthProvider();

var user = firebase.auth().currentUser;

class Ticket extends Component{
  constructor(props){
    super(props);
    this.state={
      user:{},
      cinema:{},
      movie:{},
      seats:{},
      timing:{}
    }

  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=> {
        this.setState({user})
    });
    Fire.database().ref("/").on("value",(data)=>{
      this.setState({cinema:data.val().cinemas,
        movie:data.val().movie,
        timing:data.val().timing,
        seats:data.val().seats
      }
      )
    })
    
  }
  render(){
    if(this.state.cinema.cinema)
    return(
      <Fragment>
        <div className="container" style={{border:"2px solid black", width:"50%"}}>
        <Grid container justify="center" style={{marginTop:"5%"}} >
          <Typography variant="h5">Booking Confirmation for {this.state.user.displayName}</Typography>
        </Grid>
        <Grid container justify="center" style={{marginTop:"2%"}}>
        <Typography variant="h5">Movie : {this.state.movie.movie} </Typography>
        </Grid>
        <Grid container justify="center" style={{marginTop:"2%"}}>
        <Typography variant="h5">Cinema : {this.state.cinema.cinema} </Typography>
        </Grid>
        <Grid container justify="center" style={{marginTop:"2%"}}>
        <Typography variant="h5">Timing : {this.state.timing.timing} </Typography>
        </Grid>
        <Grid container justify="center" style={{marginBottom:"5%", marginTop:"2%"}}>
        <Typography variant="h5">Seats : {this.state.seats.seats.map((data,i)=>{
          
          return(<span style={{paddingRight:"10px"}}>{data}</span>)
        })} </Typography>
        </Grid>
        </div>
      </Fragment>
    )
    else
    return(
      <h1>Loading <Loader type="MutatingDots" color="black" timeout={3000} width={100}  /> 
      </h1>
    )

  }
}
export default Ticket