// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVt8KKfFBvHhVFPgT6QLY1435op9_DioM",
  authDomain: "stm1-75742.firebaseapp.com",
  projectId: "stm1-75742",
  storageBucket: "stm1-75742.appspot.com",
  messagingSenderId: "208459741073",
  appId: "1:208459741073:web:b673067e7c16351f8dcc30",
  measurementId: "G-TBSE4F24KF",
  databaseURL: "https://stm1-75742-default-rtdb.asia-southeast1.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
