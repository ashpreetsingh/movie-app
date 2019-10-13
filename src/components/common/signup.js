import React,{Fragment,Component} from "react"
import Fire from "../fire"
import firebase from "firebase"



var provider = new firebase.auth.GoogleAuthProvider();
class signUp extends Component{
    constructor(props){
        super(props);
        this.state={
            status:""
        }
    }
    
    
    handleClickLogOut=()=>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
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
        return(
            <Fragment>
                <button onClick={this.handleClick}>Login</button>
                <button onClick={this.handleClickLogOut}>Sign Out</button>
                
            </Fragment>
        )
    }
}


export default signUp