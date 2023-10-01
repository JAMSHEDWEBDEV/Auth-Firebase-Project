// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwr8YVI6lzi3T0P1E27PNyEw9MZh6Yjg",
  authDomain: "auth-firebase-project-ec31c.firebaseapp.com",
  projectId: "auth-firebase-project-ec31c",
  storageBucket: "auth-firebase-project-ec31c.appspot.com",
  messagingSenderId: "304052582559",
  appId: "1:304052582559:web:c93a74d4d617e746c30aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;