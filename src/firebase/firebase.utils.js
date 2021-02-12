import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYf0QItEQk_B_whFGbzYFeD7VT4mvFvak",
    authDomain: "crwn-db-54e60.firebaseapp.com",
    projectId: "crwn-db-54e60",
    storageBucket: "crwn-db-54e60.appspot.com",
    messagingSenderId: "912719008439",
    appId: "1:912719008439:web:03d0d496f3cc9658c0f332",
    measurementId: "G-QV4Q0N3R0L"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

