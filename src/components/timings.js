import React,{Component,Fragment} from "react"
import Stepper from "./stepper"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import cinemaData from "../content/cinemadetail"
import Button from '@material-ui/core/Button';
import Fire from "./fire"
import Data from "../content/cinemadetail"
const styles={
    buttonStyle:{
        width:"200px",
        margin:"2%"
    }
    
}
class Timing extends Component{
    constructor(props){
        super(props)
        this.state={
            
            timings:[],
            selection:""
        }

    }
    componentDidMount=()=>{
        Fire.database().ref("cinemas/").on('value',(data)=>{
           Data.cinemas.map((cinemas)=>{
               if(data.val().cinema==cinemas.name)
               this.setState({timings:cinemas.times})
           })
           
        });

    }
    
    render(){
        return(
        <Fragment>
            
            {this.state.timings.map((data)=>{
                return(<Grid container justify="center" alignItems="center">
                    <Button variant="outlined" style={styles.buttonStyle} onClick={()=>{
                    Fire.database().ref('timing/').set({
                    timing:data
                     });
                     this.setState({selection:data})
}}>{data}</Button>
                    </Grid>
                )
            })}
            <Grid container justify="center" alignItems="center">
                <Typography variant="h5" style={{margin:"5% 0%"}}>Your Selection : {this.state.selection}</Typography>

            </Grid>
            
        </Fragment>
        )
    }    
}
export default Timing