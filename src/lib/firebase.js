import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxjmaxTMr5d1cDtLpzo-c-wjmJw_eYI2E",
  authDomain: "hotel-management-system-ar97.firebaseapp.com",
  projectId: "hotel-management-system-ar97",
 storageBucket: "hotel-management-system-ar97.appspot.com",
  messagingSenderId: "472289360705",
  appId: "1:472289360705:web:d617a133224373d6eb7fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };