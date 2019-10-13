import React, { useEffect, useState, Fragment } from 'react';
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
import ButtonGroup from "@material-ui/core/ButtonGroup"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilm} from "@fortawesome/free-solid-svg-icons"
import google from "./google.png"
import Fire from "../fire"
import firebase from "firebase"



var provider = new firebase.auth.GoogleAuthProvider();

var user = firebase.auth().currentUser;






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
    background:"transparent",
    color:"white",
    boxShadow:"none"
  }
}));

export default function SearchAppBar(props) {
  var name=""
  
  

  const [auth,setAuth]=useState(false);
  const [user,setUser]=useState("");  
  const classes = useStyles();
  firebase.auth().onAuthStateChanged((user)=> {
    if(user){
      setAuth(true);
      setUser(user);
    }
    else{
      setAuth(false)
    }
   
   });
 
  function render(){
    console.log("Render")
    var button;
    if(auth){
      button=<Fragment><h4 style={{marginRight:"2%"}}>{user.displayName}</h4>
      <Button variant="contained" style={{textTransform:"none"}} onClick={handleClickLogout}>Sign Out</Button>
      </Fragment>
    }
    else{
    button=<Button variant="contained" style={{textTransform:"none"}} onClick={handleClick}><img src={google} 
    width="20px" height="20px" style={{marginRight:"10px"}}  />Sign in with Google</Button>
    }
    return button
  }
  const handleClickLogout=()=>{
    window.location.reload();
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  const handleClick=()=>{
    console.log("clicked")
    
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
   
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarStyle}>
        <Toolbar>
          
          

          <Typography className={classes.title} variant="h6" noWrap>
            <FontAwesomeIcon icon={faFilm} style={{marginRight:"8px"}}/>
            <Link to="/" style={{textDecoration:'none',color:'white'}}>BookMyMovie</Link>
          </Typography>
         
          
          {render()}
          
            {/* <Button variant="contained" style={{textTransform:"none"}} onClick={handleClick}><img src={google} 
             width="20px" height="20px" style={{marginRight:"10px"}}  />Sign in with Google</Button> */}
            
         
           
        </Toolbar>
      </AppBar>
    </div>
  );
}