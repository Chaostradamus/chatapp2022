// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlssiOThuI4CwMGwzvtiRjMcA7oIo5E1w",
  authDomain: "chatapp2022-76457.firebaseapp.com",
  projectId: "chatapp2022-76457",
  storageBucket: "chatapp2022-76457.appspot.com",
  messagingSenderId: "1033587884318",
  appId: "1:1033587884318:web:6feb3b01ad43e49464890f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
