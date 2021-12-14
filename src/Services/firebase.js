import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCaSvCAtPF4r-z07IRQujI3YET-s1qZbBQ",
  authDomain: "gb-react-app-ef161.firebaseapp.com",
  databaseURL: "https://gb-react-app-ef161-default-rtdb.firebaseio.com",
  projectId: "gb-react-app-ef161",
  storageBucket: "gb-react-app-ef161.appspot.com",
  messagingSenderId: "787295586104",
  appId: "1:787295586104:web:96727a3394d694e80363cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);