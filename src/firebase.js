// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYj6AyNA84QWYuFLw6k80qVjLwO9XgSig",
  authDomain: "react-todolist-def60.firebaseapp.com",
  projectId: "react-todolist-def60",
  storageBucket: "react-todolist-def60.appspot.com",
  messagingSenderId: "197357996281",
  appId: "1:197357996281:web:046a75b93fee289736ba28",
  databaseURL:
    "https://react-todolist-def60-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
