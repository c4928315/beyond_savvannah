// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFyPVoqkVjwjRDH0O9i45LuZvQsmxlY6w",
  authDomain: "omnichatapp.firebaseapp.com",
  projectId: "omnichatapp",
  storageBucket: "omnichatapp.appspot.com",
  messagingSenderId: "113344976166",
  appId: "1:113344976166:web:d157bdac53e7f8b68a5de7",
  measurementId: "G-W953JHQ2L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };