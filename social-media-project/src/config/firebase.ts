// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS82zF3_KaJLjN8sQWuwrxV5pwcaXPZGg",
  authDomain: "social-media-app-7336f.firebaseapp.com",
  projectId: "social-media-app-7336f",
  storageBucket: "social-media-app-7336f.firebasestorage.app",
  messagingSenderId: "1002295398963",
  appId: "1:1002295398963:web:bf792cc9daa7e0304a8946",
  measurementId: "G-Y0DZB7YKQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();