
import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgITzDm65_t2lQm3R3udCwEReplHP5NXw",
  authDomain: "clone-cdf20.firebaseapp.com",
  projectId: "clone-cdf20",
  storageBucket: "clone-cdf20.appspot.com",
  messagingSenderId: "447779195672",
  appId: "1:447779195672:web:83d00583af9332972fec6d",
  measurementId: "G-BPTBC64CQV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
export { db, auth };  
  
export default firebase