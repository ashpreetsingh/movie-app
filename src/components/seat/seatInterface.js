import React, {Component, Fragment} from "react";
import './seat.css';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Fire from "../fire"
class seatInterface extends Component {
constructor() {
super();
    this.state = {
    seat: [
    'F1','F2','F3','F4','F5','F6',
    'M1','M2','M3','M4','M5','M6',
    'N1','N2','N3','N4','N5','N6',
    'B1','B2','B3','B4','B5','B6'
    ],
    seatAvailable: [
        'F1','F2','F3','F4','F5','F6',
        'M1','M2','M3','M4','M5','M6',
    'N1','N2','N3','N4','N5','N6',
    'B1','B2','B3','B4','B5','B6'
    
    ],
    seatReserved: []
}
}
componentDidUpdate=()=>{
    Fire.database().ref('seats/').set({
        seats:this.state.seatReserved
         });
}

onClickData(seat) {
if(this.state.seatReserved.indexOf(seat) > -1 ) {
    this.setState({
    seatAvailable: this.state.seatAvailable.concat(seat),
    seatReserved: this.state.seatReserved.filter(res => res != seat)
    })

} else {
    this.setState({
    seatReserved: this.state.seatReserved.concat(seat),
    seatAvailable: this.state.seatAvailable.filter(res => res != seat)
    })
}
}

render() {
    console.log(this.state)
return (
    <div>
        <Typography variant="h6" style={{textAlign:"center",color:"gray"}}>Screen this side</Typography>
        <hr width="250px"/>
    <DrawGrid 
        seat = { this.state.seat }
        available = { this.state.seatAvailable }
        reserved = { this.state.seatReserved }
        onClickData = { this.onClickData.bind(this) }
        />
    </div>
)
}    
}

class DrawGrid extends React.Component {
render() {
    return (
        <Fragment >
        <div className="container">
        <h2></h2>
        <table className="grid">
        <Grid container alignItems="center" justify="center">
                { this.props.seat.map( row =>
                <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
           
           </Grid>
        </table>
        </div>
        </Fragment>
    )
}

onClickSeat(seat) {
    this.props.onClickData(seat);
}
}

export default seatInterface;