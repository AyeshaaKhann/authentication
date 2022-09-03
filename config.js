// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgYHHzvgLec2Wkm2IoN0MKzmAF9tH5VtU",
  authDomain: "my-first-app-ad2eb.firebaseapp.com",
  projectId: "my-first-app-ad2eb",
  storageBucket: "my-first-app-ad2eb.appspot.com",
  messagingSenderId: "92278382057",
  appId: "1:92278382057:web:4e53309443b405a3943f78",
  measurementId: "G-7R0Y96NM2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);