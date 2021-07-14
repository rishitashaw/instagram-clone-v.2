import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyAxxl1KNIOZH9W_UgRFRwfwi4VIoGTk8vE",
  authDomain: "instagram-7e195.firebaseapp.com",
  projectId: "instagram-7e195",
  storageBucket: "instagram-7e195.appspot.com",
  messagingSenderId: "712561877980",
  appId: "1:712561877980:web:e2971fbf067bd0c2476519",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };
