import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyDslZ8t4_O0C71bMKmvK-5dT4gxJBTxjEU",
    authDomain: "learnforward-b8e93.firebaseapp.com",
    databaseURL: "https://learnforward-b8e93.firebaseio.com",
    projectId: "learnforward-b8e93",
    storageBucket: "learnforward-b8e93.appspot.com",
    messagingSenderId: "110471968321",
    appId: "1:110471968321:web:6cacc25abd91228ffc38c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export { storage, firebase as default };