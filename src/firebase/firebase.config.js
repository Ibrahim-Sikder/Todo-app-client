// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSuu5yx6puXHjtyTMzlxnBJksFqGcYqrM",
  authDomain: "todo-app-67122.firebaseapp.com",
  projectId: "todo-app-67122",
  storageBucket: "todo-app-67122.appspot.com",
  messagingSenderId: "1025399142165",
  appId: "1:1025399142165:web:fe290917fbf3bdcc82db1c",
  measurementId: "G-P1HCWYCXJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;