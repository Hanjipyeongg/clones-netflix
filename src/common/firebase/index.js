import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0yyhZmReZLlaoPTl-gO-Kq5VarPZhk1Q",
  authDomain: "netflix-clones-9ff2d.firebaseapp.com",
  projectId: "netflix-clones-9ff2d",
  storageBucket: "netflix-clones-9ff2d.appspot.com",
  messagingSenderId: "1059358150281",
  appId: "1:1059358150281:web:769568870b788e3a57c058",
  measurementId: "G-06TEDCYLSG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
