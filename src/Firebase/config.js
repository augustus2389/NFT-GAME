// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCvMCV0zXbmCweeOczJx9wmirIu9bXVbK8",
  authDomain: "nft-game-31ca8.firebaseapp.com",
  projectId: "nft-game-31ca8",
  storageBucket: "nft-game-31ca8.appspot.com",
  messagingSenderId: "241879169059",
  appId: "1:241879169059:web:bc384de0b9b630a9211996",
  measurementId: "G-82ZYB9NEFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
