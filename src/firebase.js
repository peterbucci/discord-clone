// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIABMD2zAA3O3ZKoOACQUJ4WZKAfbOv_Q",
  authDomain: "discord-clone-2-9d9c5.firebaseapp.com",
  projectId: "discord-clone-2-9d9c5",
  storageBucket: "discord-clone-2-9d9c5.appspot.com",
  messagingSenderId: "209969781937",
  appId: "1:209969781937:web:e1b67e5cc8256fd82b5690",
  measurementId: "G-1KDRTE41PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
