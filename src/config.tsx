import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AjQRWvN80IZ_do_Trw6lAAIdjE8mnRw",
  authDomain: "spry-metric-324304.firebaseapp.com",
  projectId: "spry-metric-324304",
  storageBucket: "spry-metric-324304.appspot.com",
  messagingSenderId: "511491331598",
  appId: "1:511491331598:web:212189a8bcf4d3a9cd8e5f",
  measurementId: "G-XKFP3LZ3DK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };