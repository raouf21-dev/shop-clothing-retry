import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyA7__-mRZGjwzYLWxd7yIPZyHMYFlUpmF8",
  authDomain: "shop-clothing-retry.firebaseapp.com",
  projectId: "shop-clothing-retry",
  storageBucket: "shop-clothing-retry.appspot.com",
  messagingSenderId: "789560884198",
  appId: "1:789560884198:web:9427732dfdbce0cb02f427",
  measurementId: "G-7VNP319NQS"
};

  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;