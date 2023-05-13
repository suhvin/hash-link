// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
  apiKey: "AIzaSyBybRuFtg4gmhvLbqasCDUYtcBxRkW6yAo",
  authDomain: "hash-link.firebaseapp.com",
  projectId: "hash-link",
  storageBucket: "hash-link.appspot.com",
  messagingSenderId: "357095374223",
  appId: "1:357095374223:web:1afe0a35ce019630985ffa",
  measurementId: "G-K7GKNJ7XKV",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
