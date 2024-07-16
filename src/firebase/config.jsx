// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTN8hPJq54r7WgO0TmU5F0Pd-rU0Bux3w",
  authDomain: "shanshop-8c685.firebaseapp.com",
  projectId: "shanshop-8c685",
  storageBucket: "shanshop-8c685.appspot.com",
  messagingSenderId: "247851053578",
  appId: "1:247851053578:web:2f3118ce4e64a9121f65f3",
  measurementId: "G-YLDL8SXF58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
