import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBwPPcUJQ6L73yptnOB4QS1c9GwoZvID_o",
    authDomain: "goldsmiths-meetup.firebaseapp.com",
    projectId: "goldsmiths-meetup",
    storageBucket: "goldsmiths-meetup.appspot.com",
    messagingSenderId: "33479256918",
    appId: "1:33479256918:web:d504b2a6cdc1e22a9544f7"
  }).auth();