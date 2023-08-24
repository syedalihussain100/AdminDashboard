import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwFent3lCPO8MtwQfLyLFKXx_t7wqbT50",
  authDomain: "bobobet1-42b03.firebaseapp.com",
  projectId: "bobobet1-42b03",
  storageBucket: "bobobet1-42b03.appspot.com",
  messagingSenderId: "1086966797518",
  appId: "1:1086966797518:web:0dc7ab1c70c93c8d86ec9f",
  measurementId: "G-KVXS4Q0813",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
