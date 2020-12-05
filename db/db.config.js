import firebase from "firebase";
import 'firebase/firestore';


// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDhGydrEboHVq4hn2RDZwCmw13GU-5PGE4",
  authDomain: "hostish-31a49.firebaseapp.com",
  databaseURL: "https://hostish-31a49.firebaseio.com",
  projectId: "hostish-31a49",
  storageBucket: "hostish-31a49.appspot.com",
  messagingSenderId: "748452366313",
  appId: "1:748452366313:web:64c83115738d3610316d78",
  measurementId: "G-49RD0EK03C"
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app(); // if already initialized, use that one
// }

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export const usersRef = db.collection('user');

export {firebase};


