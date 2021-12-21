import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6ZKZ9aV-jZ2306YZEcX3d5NueXDDstgE",
  authDomain: "moviedb-sebzz.firebaseapp.com",
  projectId: "moviedb-sebzz",
  storageBucket: "moviedb-sebzz.appspot.com",
  messagingSenderId: "27772375649",
  appId: "1:27772375649:web:9bfe8666f515957386d020",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebaseApp };
