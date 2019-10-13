import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/"

var firebaseConfig = {
  apiKey: "AIzaSyB_lyFv18VMBfMZjZv--tYR5HVqX4CN2hI",
  authDomain: "movie-app-bf37c.firebaseapp.com",
  databaseURL: "https://movie-app-bf37c.firebaseio.com",
  projectId: "movie-app-bf37c",
  storageBucket: "",
  messagingSenderId: "448238166025",
  appId: "1:448238166025:web:932f4036890754ed"
};
// Initialize Firebase
var fire=firebase.initializeApp(firebaseConfig);
console.log(fire)
export default fire