import firebase from "firebase"

  // Your web app's Firebase configuration
  const fire = {
    apiKey: "AIzaSyC0jpNiWHe0EWF4SxQ4pAQKaVzu1QocRts",
    authDomain: "react-chat-app-b3aee.firebaseapp.com",
    databaseURL: "https://react-chat-app-b3aee.firebaseio.com",
    projectId: "react-chat-app-b3aee",
    storageBucket: "",
    messagingSenderId: "880129231009",
    appId: "1:880129231009:web:fe672d9c58d332eb"
  };
  // Initialize Firebase
  const config=firebase.initializeApp(fire);
  export default config
