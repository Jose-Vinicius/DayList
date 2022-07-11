import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `REACT_APP_APIKEY`,
  authDomain: `REACT_APP_AUTHDOMAIN`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
