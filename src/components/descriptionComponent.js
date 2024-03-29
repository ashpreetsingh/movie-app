import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "./common/button"
import StarRatingComponent from "react-star-rating-component";
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth:"75vw"
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  const handleClick=()=>
    props.handleClick(props.data.id,props.data.name)
  
  return (
    <div>
      <Paper className={classes.root} elevation={10} style={{textAlign:"center"}}>
        <Typography variant="h4" component="h3">
          {props.data.name}
        </Typography>
        <iframe
                    src={props.data.trailer}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
                    height="350px"
                    style={{marginTop:"2%", marginBottom:"2%"}}
                    />
        <Typography component="p">
          {props.data.description}
        
        </Typography>
        {/* <StarRatingComponent value={props.data.rating} /> */}
        <StarRatings rating={props.data.rating} starDimension='20px' starSpacing='4px' starRatedColor='rgb(250,236,42)'/>
        <Typography>
        <Button label="Book Now!" handleClick={handleClick} />
        </Typography>
      </Paper>
    </div>
  );
}