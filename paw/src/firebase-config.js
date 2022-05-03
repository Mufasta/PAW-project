// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAzRNYzK1N_4aTD_Q3mPlAv9bRlkMdczro",
  authDomain: "project-p-93725.firebaseapp.com",
  projectId: "project-p-93725",
  storageBucket: "project-p-93725.appspot.com",
  messagingSenderId: "687245997198",
  appId: "1:687245997198:web:b126646cf2145e7fe605df",
  measurementId: "G-4ZMHH3MYS8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export default firebase