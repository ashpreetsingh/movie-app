import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button"
import DialogBox from "./dialogBox"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fire from "../fire"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  navbarStyle:{
    backgroundColor:"white",
    color:"black"
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  let buttonClick=false;
  const handleClick=()=>{
    buttonClick=true;
  }
  const [open, setOpen] = React.useState(false);
  let [id,password]=React.useState("")

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);

  }
  function handleEmail(e){
    
      Fire.database().ref('users/').set({
        
        id:e.target.value
      });
    
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarStyle}>
        <Toolbar>
          
          
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{textDecoration:'none',color:'black'}}>BookMyMovie</Link>
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div> */}
          
          <ButtonGroup  color="secondary" size="small" variant="contained">
            <Button onClick={handleClickOpen}>Login</Button>
            <Button>Sign Up</Button>
            </ButtonGroup> 
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Login
                    </DialogContentText>
                    <TextField autoFocus label="Email Address" type="email" onChange={handleEmail} />
                    <TextField label="Password" type="password" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Login</Button>
                </DialogActions>
                </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}