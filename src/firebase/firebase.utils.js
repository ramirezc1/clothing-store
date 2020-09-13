import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkqhm-Z9XeaInnBvCNaxWIV11L5YAdAxg",
  authDomain: "cstore-db.firebaseapp.com",
  databaseURL: "https://cstore-db.firebaseio.com",
  projectId: "cstore-db",
  storageBucket: "cstore-db.appspot.com",
  messagingSenderId: "163487001004",
  appId: "1:163487001004:web:8b46b7e8ae42157a6b7209",
  measurementId: "G-9F612T9VJV",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
