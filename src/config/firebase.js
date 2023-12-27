// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE2P0GMrzRbLls-iN8p-4sA9KQSamoQcI",
  authDomain: "react-project5-e3249.firebaseapp.com",
  projectId: "react-project5-e3249",
  storageBucket: "react-project5-e3249.appspot.com",
  messagingSenderId: "752962835614",
  appId: "1:752962835614:web:30bef1888f6b89be17978f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);