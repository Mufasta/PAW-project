// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjvivQBUhQb-zycBiarcZexh0BUW6XMBI",
  authDomain: "paw-project-f4019.firebaseapp.com",
  databaseURL: "https://paw-project-f4019-default-rtdb.firebaseio.com",
  projectId: "paw-project-f4019",
  storageBucket: "paw-project-f4019.appspot.com",
  messagingSenderId: "607782983854",
  appId: "1:607782983854:web:c6a426bbda62a27f1e353f",
  measurementId: "G-WNRLRT0WEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);