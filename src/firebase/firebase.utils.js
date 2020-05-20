import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj-QEA-OXo5pWjdZBDTK2UJMbF0d0qVPI",
  authDomain: "crwn-db-5b246.firebaseapp.com",
  databaseURL: "https://crwn-db-5b246.firebaseio.com",
  projectId: "crwn-db-5b246",
  storageBucket: "crwn-db-5b246.appspot.com",
  messagingSenderId: "705518080908",
  appId: "1:705518080908:web:760922923b2b0fb5603ca9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
