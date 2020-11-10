import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
