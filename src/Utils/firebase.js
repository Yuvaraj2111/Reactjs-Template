// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZm5j4p1Od1TrHfQTBFtQN-prZqyd9KU",
  authDomain: "sd-lab-5d7d1.firebaseapp.com",
  projectId: "sd-lab-5d7d1",
  storageBucket: "sd-lab-5d7d1.appspot.com",
  messagingSenderId: "332256190276",
  appId: "1:332256190276:web:9644ebe25efef4c4cd0111",
};

// Initialize Firebase
let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
