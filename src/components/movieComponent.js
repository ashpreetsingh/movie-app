
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from "../content/images/spidey.jpg";
import Fade from "@material-ui/core/Fade"


const returnprops=(props)=>{
  return props
}
let x=returnprops();
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    height:'510px',
    cursor:'pointer',
    borderRadius:"0",
    transition: 'transform 0.2s',
    // transitionTimingFunction:'ease',
    '&:hover' :{
      transform:'scale(1.02,1.02)'
    },
    
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  

});
// function returnImg(props){

let raised=false;
function SimpleCard(props) {

  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let x=props.data;
  console.log(props)
  const handleClick=()=>{
    props.handleClick(props.data.id)
  }
  return (
    <Card className={classes.card} onClick={handleClick} raised={true}>
      {/* <Fade in={props.hover}> */}
      <CardContent >
        <img src={props.data.bg} width='100%' height='350px'></img>
     
        <Typography variant="h5" component="h2" style={{marginTop:'2%'}}>
         {props.data.name}
        </Typography>
        <Typography variant="h6">
          {props.data.language}
        </Typography>
        <Typography color="textSecondary" className={classes.pos}>
         <div>{props.data.certificate}  </div>      
          {props.data.genre}
        </Typography>
       
        
      </CardContent>
      {/* </Fade> */}
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
export default SimpleCard;