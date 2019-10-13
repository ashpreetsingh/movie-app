import React,{Component,Fragment} from "react"
import Stepper from "./stepper"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import cinemaData from "../content/cinemadetail"
import Button from '@material-ui/core/Button';
import Fire from "./fire"
// import {connect} from "react-redux"
// import * as actionTypes from "../store/action-types"

const styles={
    buttonStyle:{
        margin:'1%',
        width:"300px",
        height:"60px",
        backgroundColor:"white",
        '&:hover':{
            color:"white"
        }
    }
}
// const mapStateToProps = state =>{
//     return {
//         cinema:state.cinema
//     }
// }
// const mapDispatchToProps=dispatch =>{
//     return{
//         setCinema :()=>dispatch({""})
//     }
// }
class cinemaDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            cinema:"",
            selection:""
        }
    }
   

    render(){
        console.log(this.state)
        return(
            <Fragment>{
            cinemaData.cinemas.map((data,i)=>{
                return(<Grid container justify="center" alignItems="center">
                    <Button variant="outlined" style={styles.buttonStyle} onClick={()=>{
                    Fire.database().ref('cinemas/').set({
                    cinema:data.name
                     });
                     this.setState({selection:data.name})
}} key={i}>{data.name}</Button>
                    </Grid>)
            })
        }
            <Grid container justify="center" alignItems="center">
                <Typography variant="h5" style={{margin:"5% 0%"}}>Your Selection : {this.state.selection}</Typography>

            </Grid>
            </Fragment>
            )
}
}
export default cinemaDetail