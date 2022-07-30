// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBP2cxxPInU2xwCaXYk4GK7YapEGRzK8G4",
    authDomain: "whatsapp-clone-9487b.firebaseapp.com",
    projectId: "whatsapp-clone-9487b",
    storageBucket: "whatsapp-clone-9487b.appspot.com",
    messagingSenderId: "930715413260",
    appId: "1:930715413260:web:0db340a889cd9ea77eb729",
    measurementId: "G-9FF4GV42CY"
  }; 

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;