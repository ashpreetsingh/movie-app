import React,{Fragment,Component} from "react"
import Fire from "../fire"
import firebase from "firebase"



var provider = new firebase.auth.GoogleAuthProvider();
var provider2= new firebase.auth.FacebookAuthProvider();
class signUp extends Component{
    constructor(props){
        super(props);
        this.state={
            status:""
        }
    }
    componentDidMount=()=>{

        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              alert("Signed In")
              console.log(user.displayName+" is signed in");
              this.setState({status:"Log Out"});
             
            } else {
              // User is signed out.
              // ...
              alert("Signed Out")
              console.log("Signed Out")
              this.setState({status:"Log In With Facebook"})
            }
          });
          
    }
    
    handleClickLogOut=()=>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    handleClick=(user)=>{
        
            if(!user){
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
    else{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }


    }
    render(){
        return(
            <Fragment>
                <button onClick={this.handleClick}>{this.state.status}</button>
                {/* <button onClick={this.handleClickLogOut}>Sign Out</button> */}
                
            </Fragment>
        )
    }
}


export default signUp