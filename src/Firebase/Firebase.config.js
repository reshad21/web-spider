// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrRxKRnw-cLsSO7mrp1QwkOuPVLZtYqZg",
  authDomain: "webspiderbd-c745e.firebaseapp.com",
  projectId: "webspiderbd-c745e",
  storageBucket: "webspiderbd-c745e.appspot.com",
  messagingSenderId: "1044228390652",
  appId: "1:1044228390652:web:95aa8ff3638920fb91e179",
  measurementId: "G-29QS3B7848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;