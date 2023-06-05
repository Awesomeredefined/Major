import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKvMzC9-0mB287Bt0VaAnNEG-eIM_Dc4k",
  authDomain: "major-ba6a6.firebaseapp.com",
  projectId: "major-ba6a6",
  storageBucket: "major-ba6a6.appspot.com",
  messagingSenderId: "609333970589",
  appId: "1:609333970589:web:896a30d311d95caf83f674",
  measurementId: "G-Q3ZEKR0PK6"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }