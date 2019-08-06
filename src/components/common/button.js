import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
   
  },
  input: {
    display: 'none',
  },
}));


export default function ContainedButtons(props) {
  const classes = useStyles();
 function handleClick(){
    // props.handleClick(props.label)
}
  return (
    <div>
      <Button variant="contained" className={classes.button} color="secondary" onClick={handleClick}>
        {props.label}
      </Button>
    </div>
  );
}